
function getFullName(usrGivenName) {
    let chrName;
    switch (usrGivenName) {
        case "mario":
            chrName = "Mario";
            break;
        case "luigi":
            chrName = "Luigi";
            break;
        case "bowser":
            chrName = "Bowser Morton Koopa";
            break;
        case "peach":
            chrName = "Princesa Peach Toadstool";
            break;
        case "yoshi":
            chrName = "T. Yoshisaur Munchakoopas";
            break;
        case "toad":
            chrName = "Toad";
            break;
        case "toadette":
            chrName = "Toadette";
            break;
        case "daisy":
            chrName = "Princesa Daisy";
            break;
        default:
            chrName = "(desconocido)";
            break;
    }
    return chrName;
}

function hideCharacters() {
    const allChr = document.getElementById("cajas").children;
    //console.log(allChr);
    for (let index = 0; index < allChr.length; index++) {
        allChr[index].title= "";
    }
}

function characterShowcase() {
    hideCharacters();
    const chr=window.prompt("¿Quién se presenta hoy? (Mario, Luigi, Bowser, Peach, Yoshi, Toad, Toadette, Daisy)").toLocaleLowerCase();
    console.log(`Respuesta del usuario: ${chr}`);

    const chrFullName = getFullName(chr);
    const stringPreview = document.getElementsByTagName("h1")[0].children[0];
    console.log(stringPreview);
    stringPreview.innerText = chrFullName;

    if (chrFullName != "(desconocido)") {
        const chrShowcase = document.getElementById(chr);
        //console.log(chrShowcase);
        chrShowcase.title = "Presentado";
    }
    // ---- Comportamiento : ocultar el boton
    //document.getElementsByClassName("btn")[0].style.display = "none"
}

// Aclaracion : los errores encontrados eran referentes a los ids, o bien estaban mal escritos(en el HTML o en el CSS) o directamente eran inexistentes.
// Procedi a resolverlos