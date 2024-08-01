// https://www.w3schools.com/charsets/ref_html_utf8.asp

const Localization = {
    _dictionaries: {
        'en': {
            title: 'Ayudante de Veracidad - Reto Estatico (Distribución Equitativa)',
            created_by: 'Creado por',

            // 4th Encounter
            encounter_4: '4to Encuentro',
            dissection_tool: 'Herramienta de Registro',
            reset: 'Reiniciar',
            left: 'Izquierda',
            middle: 'Medio',
            right: 'Derecha',
            inside: 'Estatua',
            outside: 'Pared',
            circle: 'C&iacuterculo',
            square: 'Cuadrado',
            triangle: 'Tri&aacutengulo',
            sphere: 'Esfera',
            cube: 'Cubo',
            pyramid: 'Pir&aacutemide',
            cylinder: 'Cilindro',
            prism: 'Prisma',
            cone: 'Cono',
            steps_to_solve: 'Pasos para resolver',
            dissect: 'Diseccionar',
            from: 'de'
        },

        'es': {
            title: 'Ayudante de Veracidad - Reto Estatico (Distribución Equitativa)',
            created_by: 'Creado por',

            // 4th Encounter
            encounter_4: '4to Encuentro',
            dissection_tool: 'Herramienta de Registro',
            reset: 'Reiniciar',
            left: 'Izquierda',
            middle: 'Medio',
            right: 'Derecha',
            inside: 'Estatua',
            outside: 'Pared',
            circle: 'C&iacuterculo',
            square: 'Cuadrado',
            triangle: 'Tri&aacutengulo',
            sphere: 'Esfera',
            cube: 'Cubo',
            pyramid: 'Pir&aacutemide',
            cylinder: 'Cilindro',
            prism: 'Prisma',
            cone: 'Cono',
            steps_to_solve: 'Pasos para resolver',
            dissect: 'Diseccionar',
            from: 'de'
        }
    },

    dictionary: null,

    Initialize: function () {
        const lang = this._getLang();
        const dictionary = this._dictionaries[lang];

        $("[data-localize]").each(function () {
            const language = $(this).data('localize');
            $(this).html(dictionary[language]);
        });

        this.dictionary = dictionary;
    },

    _getLang: function () {
        const supportedLanguages = ['en', 'es'];

        for (let i = 0; i < navigator.languages.length; i++) {
            if (supportedLanguages.indexOf(navigator.languages[i]) != -1) {
                return navigator.languages[i];
            }
        }

        return 'en';
    }
}

$(function () {
    Localization.Initialize();

    $('.se-btn-group button').on('click', function () {
        const button = $(this);
        const group = button.closest('.se-btn-group');
        const wasSelected = button.hasClass('btn-light');

        group.find('button').removeClass('btn-light');
        group.find('button').addClass('btn-dark');

        button.toggleClass('btn-dark', wasSelected);
        button.toggleClass('btn-light', !wasSelected);
    });
});