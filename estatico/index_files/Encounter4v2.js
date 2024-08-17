let botonesIz = ["","",""]
let botonesMed = ["","",""]
let botonesDer = ["","",""]
//Clickear todos los botones
function estatuaIZ(e){

    switch(e){
        case "C": {
            const pared1 = document.getElementById('circle1pIZ');
            botonesIz.splice(0,1,"circle");
            botonesIz.splice(1,1,"circle");
            console.log(botonesIz);
            pared1.click();
            break;
        }
        case "T": {
            const pared1 = document.getElementById('triangle1pIZ');
            botonesIz.splice(0,1,"triangle");
            botonesIz.splice(1,1,"triangle");
            console.log(botonesIz);
            pared1.click();
            break;
        }
        case "S": {
            const pared1 = document.getElementById('square1pIZ');
            botonesIz.splice(0,1,"square");
            botonesIz.splice(1,1,"square");
            console.log(botonesIz);
            pared1.click();
            break;
        }
    }
    

}
function pared2IZ(e){
    switch(e){
        case "C": {
            botonesIz.splice(2,1,"circle");
            console.log(botonesIz);
            break;
        }
        case "T": {
            botonesIz.splice(2,1,"triangle");
            console.log(botonesIz);
            break;
        }
        case "S": {
            botonesIz.splice(2,1,"square");
            console.log(botonesIz);
            break;
        }
    }
    if(botonesIz[1,2] != "" && botonesMed[1,2] != "" && botonesDer[1,2] == ""){
        autocompletar("DER")
    }
    if(botonesIz[1,2] != "" && botonesDer[1,2] != "" && botonesMed[1,2] == ""){
        autocompletar("MED")
    }
}

function estatuaMED(e){

    switch(e){
        case "C": {
            const pared1 = document.getElementById('circle1pMED');
            botonesMed.splice(0,1,"circle");
            botonesMed.splice(1,1,"circle");
            console.log(botonesMed);
            pared1.click();
            break;
        }
        case "T": {
            const pared1 = document.getElementById('triangle1pMED');
            botonesMed.splice(0,1,"triangle");
            botonesMed.splice(1,1,"triangle");
            console.log(botonesMed);
            pared1.click();
            break;
        }
        case "S": {
            const pared1 = document.getElementById('square1pMED');
            botonesMed.splice(0,1,"square");
            botonesMed.splice(1,1,"square");
            console.log(botonesMed);
            pared1.click();
            break;
        }
    }
    
}
function pared2MED(e){
    switch(e){
        case "C": {
            botonesMed.splice(2,1,"circle");
            console.log(botonesMed);
            break;
        }
        case "T": {
            botonesMed.splice(2,1,"triangle");
            console.log(botonesMed);
            break;
        }
        case "S": {
            botonesMed.splice(2,1,"square");
            console.log(botonesMed);
            break;
        }
    }
    if(botonesIz[1,2] != "" && botonesMed[1,2] != "" && botonesDer[1,2] == ""){
        autocompletar("DER")
    }
    if(botonesDer[1,2] != "" && botonesMed[1,2] != "" && botonesIz[1,2] == ""){
        autocompletar("IZ")
    }
}

function estatuaDER(e){

    switch(e){
        case "C": {
            const pared1 = document.getElementById('circle1pDER');
            botonesDer.splice(0,1,"circle");
            botonesDer.splice(1,1,"circle");
            console.log(botonesDer);
            pared1.click();
            break;
        }
        case "T": {
            const pared1 = document.getElementById('triangle1pDER');
            botonesDer.splice(0,1,"triangle");
            botonesDer.splice(1,1,"triangle");
            console.log(botonesDer);
            pared1.click();
            break;
        }
        case "S": {
            const pared1 = document.getElementById('square1pDER');
            botonesDer.splice(0,1,"square");
            botonesDer.splice(1,1,"square");
            console.log(botonesDer);
            pared1.click();
            break;
        }
    }
    
}
function pared2DER(e){
    switch(e){
        case "C": {
            botonesDer.splice(2,1,"circle");
            console.log(botonesDer);
            break;
        }
        case "T": {
            botonesDer.splice(2,1,"triangle");
            console.log(botonesDer);
            break;
        }
        case "S": {
            botonesDer.splice(2,1,"square");
            console.log(botonesDer);
            break;
        }
    }
    if(botonesIz[1,2] != "" && botonesDer[1,2] != "" && botonesMed[1,2] == ""){
        autocompletar("MED")
    }
    if(botonesMed[1,2] != "" && botonesDer[1,2] != "" && botonesIz[1,2] == ""){
        autocompletar("IZ")
    }
}
//Autocompletar
function autocompletar(e){
    let a = ["","",""]
    let b = ["","",""]
    const referencia = ["circle","triangle","square"]
    

    if(e === "DER") {
        a = botonesIz.slice()
        b = botonesMed.slice()
        
    }
    if(e === "IZ") {
        a = botonesDer.slice()
        b = botonesMed.slice()
        
    }
    if(e === "MED") {
        a = botonesIz.slice()
        b = botonesDer.slice()
        
    }
    
    //Auto escenario1
    if(a[1] == a[2] && b[1] == b[2]){
        
        const tengo = [a[1],b[1],""]
        let falta = ""

        referencia.forEach(forma => {
            if(tengo.includes(forma) == false){
                falta = forma
            }
        })

        const click1 = document.getElementById(`${falta}${e}`);
        if(click1.classList.contains('btn-light')); //No se autocompleta si ya esta clickeado
        else{
            document.getElementById(`${falta}${e}`).click();
        }

        document.getElementById(`${falta}2p${e}`).click();
        
    }

    //Auto esenario2
    else if((b[1] == b[2] && a[1] != a[2]) || //B son iguales pero A no
       (a[1] == a[2] && b[1] != b[2]) || //A son iguales pero B no
       (b[1] == a[2] && a[1] == b[2] )){ //A y B son distintos pero tienen el sibolo del otro
        
        if(b[1] == b[2] && a[1] != a[2]){//B son iguales pero A no
            

            const click1 = document.getElementById(`${a[2]}${e}`);
            if(click1.classList.contains('btn-light')); //No se autocompleta si ya esta clickeado
            else{
                document.getElementById(`${a[2]}${e}`).click();
            }
            
            document.getElementById(`${a[1]}2p${e}`).click();
        }
        if(a[1] == a[2] && b[1] != b[2]){//A son iguales pero B no

            const click1 = document.getElementById(`${b[2]}${e}`);
            if(click1.classList.contains('btn-light')); //No se autocompleta si ya esta clickeado
            else{
                document.getElementById(`${b[2]}${e}`).click();
            }
        
            document.getElementById(`${b[1]}2p${e}`).click()
        }
        if((b[1] == a[2] && a[2] == b[1])){//A y B son distintos pero tienen el sibolo del otro
            
            const tengo = [a[1],b[1],""]
            let falta = ""

            referencia.forEach(forma => {
                if(tengo.includes(forma) == false){
                    falta = forma
                }
            })

            const click1 = document.getElementById(`${falta}${e}`);
            if(click1.classList.contains('btn-light'));
            else{
                document.getElementById(`${falta}${e}`).click()
            }

            document.getElementById(`${falta}2p${e}`).click()

        }
    }

    //Auto esenario3
    else{
        let faltaEst = ""
        let faltap2 = ""

        referencia.forEach(forma => {
            if(a[1] != forma && b[1] != forma){
                faltaEst = forma
            }
            if(a[2] != forma && b[2] != forma){
                faltap2 = forma
            }
        })
        
        const click1 = document.getElementById(`${faltaEst}${e}`);
        if(click1.classList.contains('btn-light'));//No se autocompleta si ya esta clickeado
        else{
            document.getElementById(`${faltaEst}${e}`).click()
        }
        document.getElementById(`${faltap2}2p${e}`).click()
    }
}

function empiezaIZ(clickedButton) {

    
    const allButtons = document.querySelectorAll('.empezar-btn');
    
    allButtons.forEach(button => {
        if (button !== clickedButton) {
            
            button.classList.add('btn-dark');
            button.classList.remove('btn-light');
        }
    })

    if(botonesIz[1]==botonesIz[2] && botonesMed[1]==botonesMed[2] && botonesDer[1]==botonesDer[2]){ //Son todas iguales
        esenario1("IZ")
    }
    else if(botonesIz[1]==botonesIz[2] || botonesMed[1]==botonesMed[2] || botonesDer[1]==botonesDer[2]){ //Al menos 1
        esenario2("IZ")
    }
    else{
        esenario3("IZ")
    }
    document.getElementById("stepsContainer").scrollIntoView({ behavior: 'smooth' })
}
function empiezaMED(clickedButton) {
    
    const allButtons = document.querySelectorAll('.empezar-btn');

    allButtons.forEach(button => {
        if (button !== clickedButton) {

            button.classList.add('btn-dark');
            button.classList.remove('btn-light');
        }
    })

    if(botonesIz[1]==botonesIz[2] && botonesMed[1]==botonesMed[2] && botonesDer[1]==botonesDer[2]){ //Son todas iguales
        esenario1("MED")
    }
    else if(botonesIz[1]==botonesIz[2] || botonesMed[1]==botonesMed[2] || botonesDer[1]==botonesDer[2]){ //Al menos 1
        esenario2("MED")
    }
    else{
        esenario3("MED")
    }
    document.getElementById("stepsContainer").scrollIntoView({ behavior: 'smooth' })
}
function empiezaDER(clickedButton) {
    
    const allButtons = document.querySelectorAll('.empezar-btn');

    allButtons.forEach(button => {
        if (button !== clickedButton) {

            button.classList.add('btn-dark');
            button.classList.remove('btn-light');
        }
    })

    if(botonesIz[1]==botonesIz[2] && botonesMed[1]==botonesMed[2] && botonesDer[1]==botonesDer[2]){ //Son todas iguales
        esenario1("DER")
    }
    else if(botonesIz[1]==botonesIz[2] || botonesMed[1]==botonesMed[2] || botonesDer[1]==botonesDer[2]){ //Al menos 1
        esenario2("DER")
    }
    else{
        esenario3("DER")
    }
    document.getElementById("stepsContainer").scrollIntoView({ behavior: 'smooth' })
}


function esenario1(lado){

    document.getElementById("Titulo").textContent = "Pasos para resolver (Escenario 1)"

    let contenedor = document.getElementById("stepsContainer")
    contenedor.style.display = 'block'
    var pasos = document.getElementById("steps")
    
    let a = ["","",""]
    let b = ["","",""]
    let c = ["","",""]

    if(lado == "IZ"){
        a = botonesIz.slice()
        b = botonesMed.slice()
        c = botonesDer.slice()
        primero = "Izquierda"
        segundo = "Medio"
        tercero = "Derecha"
    }
    if(lado == "MED"){
        a = botonesMed.slice()
        b = botonesIz.slice()
        c = botonesDer.slice()
        primero = "Medio"
        segundo = "Izquierda"
        tercero = "Derecha"

    }
    if(lado == "DER"){
        a = botonesDer.slice()
        b = botonesMed.slice()
        c = botonesIz.slice()
        primero = "Derecha"
        segundo = "Medio"
        tercero = "Izquierda"
    }
    pasos.innerHTML = `<li>1. ${primero} manda <i class="symbol-sm ${a[1]}"></i> a ${segundo} y <i class="symbol-sm ${a[2]}"></i> a ${tercero}.<li>
                       <li>2. ${tercero} manda <i class="symbol-sm ${c[1]}"></i> a ${primero} y <i class="symbol-sm ${c[2]}"></i> a ${segundo}.<li>
                       <li>3. ${segundo} manda <i class="symbol-sm ${b[1]}"></i> a ${tercero} y <i class="symbol-sm ${b[2]}"></i> a ${primero}.<li><hr>
                       <li>Termina en <b>${primero}<b>. <li>`;
    
}

function esenario2(lado){

    document.getElementById("Titulo").textContent = "Pasos para resolver (Escenario 2)"
    let contenedor = document.getElementById("stepsContainer")
    contenedor.style.display = 'block'
    var pasos = document.getElementById("steps")

    let a = ["","",""]
    let b = ["","",""]
    let c = ["","",""]

    if(lado == "IZ"){
        a = botonesIz.slice()
        b = botonesMed.slice()
        c = botonesDer.slice()
        primero = "Izquierda"
        segundo = "Medio"
        tercero = "Derecha"
    }
    if(lado == "MED"){
        a = botonesMed.slice()
        b = botonesIz.slice()
        c = botonesDer.slice()
        primero = "Medio"
        segundo = "Izquierda"
        tercero = "Derecha"

    }
    if(lado == "DER"){
        a = botonesDer.slice()
        b = botonesMed.slice()
        c = botonesIz.slice()
        primero = "Derecha"
        segundo = "Medio"
        tercero = "Izquierda"
    }

    //Si por donde se empieza es el repetido
    if(a[1] == a[2] ){

        pasos.innerHTML = `<li>1. ${primero} manda <i class="symbol-sm ${a[2]}"></i> a ${tercero} y <i class="symbol-sm ${a[1]}"></i> a ${segundo}.<li>
                           <li>2. ${segundo} manda <i class="symbol-sm ${b[2]}"></i> a ${primero} y <i class="symbol-sm ${b[1]}"></i> a ${tercero}.<li>
                           <li>3. ${tercero} manda <i class="symbol-sm ${c[2]}"></i> a ${primero} y <i class="symbol-sm ${c[1]}"></i> a ${segundo}.<li><hr>
                           <li>Termina en <b>${segundo}<b>. <li>`
          
    }
    //Si por donde se empieza son distintos
    if(a[1] != a[2]){

        //Si la segundo opcion tiene los iguales
        if(b[1] == b[2]){

            pasos.innerHTML = `<li>1. ${primero} manda <i class="symbol-sm ${a[1]}"></i> a ${tercero} y <i class="symbol-sm ${a[2]}"></i> a ${segundo}.<li>
                           <li>2. ${segundo} manda <i class="symbol-sm ${b[1]}"></i> a ${primero} y <i class="symbol-sm ${b[2]}"></i> a ${tercero}.<li>
                           <li>3. ${tercero} manda <i class="symbol-sm ${c[1]}"></i> a ${primero} y <i class="symbol-sm ${c[2]}"></i> a ${segundo}.<li><hr>
                           <li>Termina en <b>${segundo}<b>. <li`
                            
        }//Si la tercera opcion tiene los iguales
        else if(c[1] == c[2]){

            pasos.innerHTML = `<li>1. ${primero} manda <i class="symbol-sm ${a[1]}"></i> a ${segundo} y <i class="symbol-sm ${a[2]}"></i> a ${tercero}.<li>
                           <li>2. ${tercero} manda <i class="symbol-sm ${c[1]}"></i> a ${primero} y <i class="symbol-sm ${c[2]}"></i> a ${segundo}.<li>
                           <li>3. ${segundo} manda <i class="symbol-sm ${b[1]}"></i> a ${primero} y <i class="symbol-sm ${b[2]}"></i> a ${tercero}.<li><hr>
                           <li>Termina en <b>${tercero}<b>. <li>`
                           
                            
        }
    }
}

function esenario3(lado){

    document.getElementById("Titulo").textContent = "Pasos para resolver (Escenario 3)"
    let contenedor = document.getElementById("stepsContainer")
    contenedor.style.display = 'block'
    var pasos = document.getElementById("steps")

    let a = ["","",""]
    let b = ["","",""]
    let c = ["","",""]

    if(lado == "IZ"){
        a = botonesIz.slice()
        b = botonesMed.slice()
        c = botonesDer.slice()
        primero = "Izquierda"
        segundo = "Medio"
        tercero = "Derecha"
    }
    if(lado == "MED"){
        a = botonesMed.slice()
        b = botonesDer.slice()
        c = botonesIz.slice()
        primero = "Medio"
        segundo = "Derecha"
        tercero = "Izquierda"

    }
    if(lado == "DER"){
        a = botonesDer.slice()
        b = botonesIz.slice()
        c = botonesMed.slice()
        primero = "Derecha"
        segundo = "Izquierda"
        tercero = "Medio"
    }

    if(a[2] == c[1]){ //AntiHorario

        pasos.innerHTML = `<li>1. ${primero} manda <i class="symbol-sm ${a[1]}"></i> a ${segundo}.<li>
                           <li>2. ${segundo} manda <i class="symbol-sm ${b[1]}"></i> a ${tercero}.<li>
                           <li>3. ${tercero} manda <i class="symbol-sm ${c[1]}"></i> a ${primero}.<li>
                           <li>3. ${primero} manda <i class="symbol-sm ${a[2]}"></i> a ${segundo}.<li>
                           <li>5. ${segundo} manda <i class="symbol-sm ${b[2]}"></i> a ${tercero}.<li>
                           <li>6. ${tercero} manda <i class="symbol-sm ${c[2]}"></i> a ${primero}.<li><hr>
                           <li>Termina en <b>${primero}<b>. <li>`
    }
    if(a[2] == b[1]){ //Horario
        
        pasos.innerHTML = `<li>1. ${primero} manda <i class="symbol-sm ${a[1]}"></i> a ${tercero}.<li>
                           <li>2. ${tercero} manda <i class="symbol-sm ${c[1]}"></i> a ${segundo}.<li>
                           <li>3. ${segundo} manda <i class="symbol-sm ${b[1]}"></i> a ${primero}.<li>
                           <li>3. ${primero} manda <i class="symbol-sm ${a[2]}"></i> a ${tercero}.<li>
                           <li>5. ${tercero} manda <i class="symbol-sm ${c[2]}"></i> a ${segundo}.<li>
                           <li>6. ${segundo} manda <i class="symbol-sm ${b[2]}"></i> a ${primero}.<li><hr>
                           <li>Termina en <b>${primero}<b>. <li>`
    }
}
