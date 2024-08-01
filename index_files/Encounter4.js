const Common = {
    GetAllowedComponents: function (area, initialCount) {
        const selected = $(`.se-btn-group[data-area="${area}"] button.btn-light`);

        let components = {
            C: initialCount,
            S: initialCount,
            T: initialCount,

            Allow: function (components) {
                let myComponents = {
                    C: (components.match(/C/g) || []).length,
                    S: (components.match(/S/g) || []).length,
                    T: (components.match(/T/g) || []).length
                };

                for (const counter in myComponents) {
                    if (this[counter] < myComponents[counter]) {
                        return false;
                    }
                }

                return true;
            }
        };

        selected.each(function () {
            for (let component of $(this).data('components')) {
                components[component]--;
            }
        });

        return components;
    }
}

const Encounter4 = {
    SequenceDissection: function () {
        const buttons = $(`.se-btn-group button.btn-light`);
        if (buttons.length < 6) return null;

        const state = {
            left: {
                inside: null,
                outside: null
            },

            middle: {
                inside: null,
                outside: null
            },

            right: {
                inside: null,
                outside: null
            }
        };

        buttons.each(function () {
            const button = $(this);
            const area = button.closest('.se-btn-group').data('area');

            state[button.closest('.card-body').data('position')][area]
                = button.data('components');
        });

        for (const position in state) {
            state[position].toAdd = function () {
                let required = 'CST'.replace(this.inside, '');

                for (let component of this.outside) {
                    required = required.replace(component, '');
                }

                return required;
            };

            state[position].toRemove = function () {
                if (this.outside.includes(this.inside)) {
                    return this.inside;
                }

                for (let component of this.outside) {
                    if (component != this.outside[0]) {
                        return null;
                    }
                }

                return this.outside[0];
            };

            state[position].swap = function (toRemove, toAdd) {
                this.outside = this.outside.replace(toRemove, toAdd);
            };
        }

        const steps = [];

        while (true) {
            const sequence = Encounter4.Evaluate(state);
            if (sequence == null) break;

            let sa
            let sb
            if (sequence.componentA == "S") sa = "square"
            if (sequence.componentA == "T") sa = "triangle"
            if (sequence.componentA == "C") sa = "circle"
            if (sequence.componentB == "S") sb = "square"
            if (sequence.componentB == "T") sb = "triangle"
            if (sequence.componentB == "C") sb = "circle"

            steps.push({
                type: 'instruction',
                text: `${Localization.dictionary.dissect} ${this._toIcon(sequence.componentA)}
                       ${Localization.dictionary.from} ${Localization.dictionary[sequence.positionA]}.`
            });

            steps.push({
                type: 'instruction',
                text: `${Localization.dictionary.dissect} ${this._toIcon(sequence.componentB)}
                       ${Localization.dictionary.from} ${Localization.dictionary[sequence.positionB]}.`
            });

            state[sequence.positionA].swap(sequence.componentA, sequence.componentB);
            state[sequence.positionB].swap(sequence.componentB, sequence.componentA);

            steps.push({
                type: 'info',
                text: `${Localization.dictionary.left}: ${this._toIcon(state.left.outside)},
                    ${Localization.dictionary.middle}: ${this._toIcon(state.middle.outside)},
                    ${Localization.dictionary.right}: ${this._toIcon(state.right.outside)}`
            });
        }

        return steps;
    },

    Evaluate: function (state) {
        var sequence = {
            positionA: null,
            componentA: null,

            positionB: null,
            componentB: null
        };

        for (const position in state) {
            sequence.componentA = state[position].toRemove();

            if (sequence.componentA != null) {
                sequence.positionA = position;
                break;
            }
        }

        if (sequence.componentA === null) {
            return null; // Done!
        }

        for (const position in state) {
            if (state[position].toRemove() !== state[sequence.positionA].inside
                    && state[position].toAdd().includes(sequence.componentA)) {
                sequence.positionB = position;
                sequence.componentB = state[position].toRemove();
            }
        }

        // Force a necessary swap.
        if (sequence.positionB === null) {
            for (const position in state) {
                if (state[position].toAdd().includes(sequence.componentA)) {
                    sequence.positionB = position;
                    sequence.componentB = state[position].toRemove();
                }
            }
        }

        return sequence;
    },

    _toIcon: function (component) {
        switch (component) {
            case 'C': return `<i class="symbol-sm circle"></i>`;
            case 'S': return `<i class="symbol-sm square"></i>`;
            case 'T': return `<i class="symbol-sm triangle"></i>`;

            case 'CC':
                return '<i class="symbol-sm sphere"></i>';
            case 'SS':
                return '<i class="symbol-sm cube"></i>';
            case 'TT':
                return '<i class="symbol-sm pyramid"></i>';
            case 'CS': case 'SC':
                return '<i class="symbol-sm cylinder"></i>';
            case 'ST': case 'TS':
                return '<i class="symbol-sm prism"></i>';
            case 'TC': case 'CT':
                return '<i class="symbol-sm cone"></i>';
        }
    }
}

$(function () {
    $('.btn-reset').on('click', function () {
        $('.se-btn-group button').each(function () {
            const button = $(this);

            button.removeClass('btn-light');
            button.addClass('btn-dark');
            button.attr('disabled', false);

            $('#steps').empty();
            $('#stepsContainer').hide();

            window.scrollTo({ top: 0 });
        });
    });

    $('.se-btn-group button').on('click', function () {
        const button = $(this);
        const area = button.closest('.se-btn-group').data('area');

        // Block the ability to select buttons with invalid components.
        let components = Common.GetAllowedComponents(area, (area === 'inside' ? 1 : 2));

        $(`.se-btn-group[data-area="${area}"] button:not(.btn-light)`).each(function () {
            $(this).attr('disabled', !components.Allow($(this).data('components')));
        });

        // Enable the reset button.
        $('.btn-reset').attr('disabled', false);

        // Determine sequence for dissection.
        const steps = Encounter4.SequenceDissection();

        // Print steps for dissection.
        if (steps != null) {
            $('#steps').empty();

            for (let i = 0, step = 1; i < steps.length; i++) {
                switch (steps[i].type) {
                    case 'instruction':
                        $('#steps').append(`<li>${step++}. ${steps[i].text}</li>`);
                        break;

                    case 'info':
                        if(i == steps.length - 1)$('#steps').append(`<li>${steps[i].text}</li>`);
                        if (i !== steps.length - 1) $('#steps').append('<hr />');
                        break;
                }
            }

            $('#stepsContainer').show();
        }
        else {
            $('#stepsContainer').hide();
        }
    });
});