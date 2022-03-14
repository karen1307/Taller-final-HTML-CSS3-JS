const main = () => {
}

const main1 = () => {
}

//El tema de la pagina
const ejecutar = () => {
    let opciones = document.querySelector(`#slcOpciones`);

    const body = document.querySelector('body');
    const imagenPrincipal = document.querySelector('#imagenPrincipal');
    const link1 = document.querySelector('#link1');
    const link2 = document.querySelector('#link2');
    const link3 = document.querySelector('#link3');
    const link4 = document.querySelector('#link4');
    const link5 = document.querySelector('#link5');
    const part1 = document.querySelector('#part1');
    const encabezado1 = document.querySelector('#encabezado1');
    const encabezado2 = document.querySelector('#encabezado2');

    console.log(body);
    switch (Number(opciones.value)) {
        case 1:
            if (body.classList.contains('estilo2') || body.classList.contains('estilo3')) {
                body.removeAttribute('class');
                body.classList.add('estilo1');

                imagenPrincipal.removeAttribute('class');
                imagenPrincipal.classList.add('estilo1-box5');

                link1.removeAttribute('class');
                link1.classList.add('estilo1-box1');

                link2.removeAttribute('class');
                link2.classList.add('estilo1-box2');

                link3.removeAttribute('class');
                link3.classList.add('estilo1-box3');

                link4.removeAttribute('class');
                link4.classList.add('estilo1-box4');

                link5.removeAttribute('class');
                link5.classList.add('estilo1-box6');

                part1.removeAttribute('class');
                part1.classList.add('estilo1-acordeon1');

                encabezado1.removeAttribute('class');
                encabezado1.classList.add('estilo1-encabezado');

                encabezado2.removeAttribute('class');
                encabezado2.classList.add('estilo1-encabezado');


            }
            break;
        case 2:
            if (body.classList.contains('estilo1') || body.classList.contains('estilo3')) {
                body.removeAttribute('class');
                body.classList.add('estilo2');

                imagenPrincipal.removeAttribute('class');
                imagenPrincipal.classList.add('estilo2-box5');

                link1.removeAttribute('class');
                link1.classList.add('estilo2-box1');

                link2.removeAttribute('class');
                link2.classList.add('estilo2-box2');

                link3.removeAttribute('class');
                link3.classList.add('estilo2-box3');

                link4.removeAttribute('class');
                link4.classList.add('estilo2-box4');

                link5.removeAttribute('class');
                link5.classList.add('estilo2-box6');

                part1.removeAttribute('class');
                part1.classList.add('estilo2-acordeon1');

                encabezado1.removeAttribute('class');
                encabezado1.classList.add('estilo2-encabezado');

                encabezado2.removeAttribute('class');
                encabezado2.classList.add('estilo2-encabezado');

            }
            break;
        case 3:
            if (body.classList.contains('estilo1') || body.classList.contains('estilo2')) {
                body.removeAttribute('class');
                body.classList.add('estilo3');

                imagenPrincipal.removeAttribute('class');
                imagenPrincipal.classList.add('estilo3-box5');

                link1.removeAttribute('class');
                link1.classList.add('estilo3-box1');

                link2.removeAttribute('class');
                link2.classList.add('estilo3-box2');

                link3.removeAttribute('class');
                link3.classList.add('estilo3-box3');

                link4.removeAttribute('class');
                link4.classList.add('estilo3-box4');

                link5.removeAttribute('class');
                link5.classList.add('estilo3-box6');

                part1.removeAttribute('class');
                part1.classList.add('estilo3-acordeon1');

                encabezado1.removeAttribute('class');
                encabezado1.classList.add('estilo3-encabezado');

                encabezado2.removeAttribute('class');
                encabezado2.classList.add('estilo3-encabezado');
            }
            break;
        default:
            break;
    }
}

//temas paginas

const ejecutar1 = () => {
    let opciones = document.querySelector(`#slcOpciones`);

    const body = document.querySelector('body');
    const part1 = document.querySelector('#part1');
    const encabezado1 = document.querySelector('#encabezado1');
    const encabezado2 = document.querySelector('#encabezado2');
    const encabezado3 = document.querySelector('#encabezado3');
    const ref1 = document.querySelector('#ref1');
    const ref2 = document.querySelector('#ref2');
    const ref3 = document.querySelector('#ref3');


    console.log(body);
    switch (Number(opciones.value)) {
        case 1:
            if (body.classList.contains('estilo2') || body.classList.contains('estilo3')) {
                body.removeAttribute('class');
                body.classList.add('estilo1');

                part1.removeAttribute('class');
                part1.classList.add('estilo1-acordeon1');

                encabezado1.removeAttribute('class');
                encabezado1.classList.add('estilo1-encabezado');

                encabezado2.removeAttribute('class');
                encabezado2.classList.add('estilo1-encabezado');

                encabezado3.removeAttribute('class');
                encabezado3.classList.add('estilo1-encabezado');

                ref1.removeAttribute('class');
                ref1.classList.add('estilo1-contenido');

                ref2.removeAttribute('class');
                ref2.classList.add('estilo1-contenido');

                ref3.removeAttribute('class');
                ref3.classList.add('estilo1-contenido');


            }
            break;
        case 2:
            if (body.classList.contains('estilo1') || body.classList.contains('estilo3')) {
                body.removeAttribute('class');
                body.classList.add('estilo2');

                part1.removeAttribute('class');
                part1.classList.add('estilo2-acordeon1');

                encabezado1.removeAttribute('class');
                encabezado1.classList.add('estilo2-encabezado');

                encabezado2.removeAttribute('class');
                encabezado2.classList.add('estilo2-encabezado');

                encabezado3.removeAttribute('class');
                encabezado3.classList.add('estilo2-encabezado');

                ref1.removeAttribute('class');
                ref1.classList.add('estilo2-contenido');

                ref2.removeAttribute('class');
                ref2.classList.add('estilo2-contenido');

                ref3.removeAttribute('class');
                ref3.classList.add('estilo2-contenido');


            }
            break;
        case 3:
            if (body.classList.contains('estilo1') || body.classList.contains('estilo2')) {
                body.removeAttribute('class');
                body.classList.add('estilo3');

                part1.removeAttribute('class');
                part1.classList.add('estilo3-acordeon1');

                encabezado1.removeAttribute('class');
                encabezado1.classList.add('estilo3-encabezado');

                encabezado2.removeAttribute('class');
                encabezado2.classList.add('estilo3-encabezado');

                encabezado3.removeAttribute('class');
                encabezado3.classList.add('estilo3-encabezado');

                ref1.removeAttribute('class');
                ref1.classList.add('estilo3-contenido');

                ref2.removeAttribute('class');
                ref2.classList.add('estilo3-contenido');

                ref3.removeAttribute('class');
                ref3.classList.add('estilo3-contenido');

            }
            break;
        default:
            break;
    }
}

const ejecutar2 = () => {
    let opciones = document.querySelector(`#slcOpciones`);

    const body = document.querySelector('body');
    const part1 = document.querySelector('#part1');
    const encabezado1 = document.querySelector('#encabezado1');
    const encabezado2 = document.querySelector('#encabezado2');
    const encabezado3 = document.querySelector('#encabezado3');
    const encabezado4 = document.querySelector('#encabezado4');
    const ref1 = document.querySelector('#ref1');
    const ref2 = document.querySelector('#ref2');
    const ref3 = document.querySelector('#ref3');
    const ref4 = document.querySelector('#ref4');

    console.log(body);
    switch (Number(opciones.value)) {
        case 1:
            if (body.classList.contains('estilo2') || body.classList.contains('estilo3')) {
                body.removeAttribute('class');
                body.classList.add('estilo1');

                part1.removeAttribute('class');
                part1.classList.add('estilo1-acordeon1');

                encabezado1.removeAttribute('class');
                encabezado1.classList.add('estilo1-encabezado');

                encabezado2.removeAttribute('class');
                encabezado2.classList.add('estilo1-encabezado');

                encabezado3.removeAttribute('class');
                encabezado3.classList.add('estilo1-encabezado');

                encabezado4.removeAttribute('class');
                encabezado4.classList.add('estilo1-encabezado');

                ref1.removeAttribute('class');
                ref1.classList.add('estilo1-contenido');

                ref2.removeAttribute('class');
                ref2.classList.add('estilo1-contenido');

                ref3.removeAttribute('class');
                ref3.classList.add('estilo1-contenido');

                ref4.removeAttribute('class');
                ref4.classList.add('estilo1-contenido');

            }
            break;
        case 2:
            if (body.classList.contains('estilo1') || body.classList.contains('estilo3')) {
                body.removeAttribute('class');
                body.classList.add('estilo2');

                part1.removeAttribute('class');
                part1.classList.add('estilo2-acordeon1');

                encabezado1.removeAttribute('class');
                encabezado1.classList.add('estilo2-encabezado');

                encabezado2.removeAttribute('class');
                encabezado2.classList.add('estilo2-encabezado');

                encabezado3.removeAttribute('class');
                encabezado3.classList.add('estilo2-encabezado');

                encabezado4.removeAttribute('class');
                encabezado4.classList.add('estilo2-encabezado');

                ref1.removeAttribute('class');
                ref1.classList.add('estilo2-contenido');

                ref2.removeAttribute('class');
                ref2.classList.add('estilo2-contenido');

                ref3.removeAttribute('class');
                ref3.classList.add('estilo2-contenido');

                ref4.removeAttribute('class');
                ref4.classList.add('estilo2-contenido');

            }
            break;
        case 3:
            if (body.classList.contains('estilo1') || body.classList.contains('estilo2')) {
                body.removeAttribute('class');
                body.classList.add('estilo3');

                part1.removeAttribute('class');
                part1.classList.add('estilo3-acordeon1');

                encabezado1.removeAttribute('class');
                encabezado1.classList.add('estilo3-encabezado');

                encabezado2.removeAttribute('class');
                encabezado2.classList.add('estilo3-encabezado');

                encabezado3.removeAttribute('class');
                encabezado3.classList.add('estilo3-encabezado');

                encabezado4.removeAttribute('class');
                encabezado4.classList.add('estilo3-encabezado');

                ref1.removeAttribute('class');
                ref1.classList.add('estilo3-contenido');

                ref2.removeAttribute('class');
                ref2.classList.add('estilo3-contenido');

                ref3.removeAttribute('class');
                ref3.classList.add('estilo3-contenido');

                ref4.removeAttribute('class');
                ref4.classList.add('estilo3-contenido');
            }
            break;
        default:
            break;
    }
}

const ejecutar3 = () => {
    let opciones = document.querySelector(`#slcOpciones`);

    const body = document.querySelector('body');
    const part1 = document.querySelector('#part1');
    const encabezado1 = document.querySelector('#encabezado1');
    const encabezado2 = document.querySelector('#encabezado2');
    const encabezado3 = document.querySelector('#encabezado3');
    const encabezado4 = document.querySelector('#encabezado4');
    const encabezado5 = document.querySelector('#encabezado5');

    console.log(body);
    switch (Number(opciones.value)) {
        case 1:
            if (body.classList.contains('estilo2') || body.classList.contains('estilo3')) {
                body.removeAttribute('class');
                body.classList.add('estilo1');

                part1.removeAttribute('class');
                part1.classList.add('estilo1-acordeon1');

                encabezado1.removeAttribute('class');
                encabezado1.classList.add('estilo1-encabezado');

                encabezado2.removeAttribute('class');
                encabezado2.classList.add('estilo1-encabezado');

                encabezado3.removeAttribute('class');
                encabezado3.classList.add('estilo1-encabezado');

                encabezado4.removeAttribute('class');
                encabezado4.classList.add('estilo1-encabezado');

                encabezado5.removeAttribute('class');
                encabezado5.classList.add('estilo1-encabezado');




            }
            break;
        case 2:
            if (body.classList.contains('estilo1') || body.classList.contains('estilo3')) {
                body.removeAttribute('class');
                body.classList.add('estilo2');

                part1.removeAttribute('class');
                part1.classList.add('estilo2-acordeon1');

                encabezado1.removeAttribute('class');
                encabezado1.classList.add('estilo2-encabezado');

                encabezado2.removeAttribute('class');
                encabezado2.classList.add('estilo2-encabezado');

                encabezado3.removeAttribute('class');
                encabezado3.classList.add('estilo2-encabezado');

                encabezado4.removeAttribute('class');
                encabezado4.classList.add('estilo2-encabezado');

                encabezado5.removeAttribute('class');
                encabezado5.classList.add('estilo2-encabezado');


            }
            break;
        case 3:
            if (body.classList.contains('estilo1') || body.classList.contains('estilo2')) {
                body.removeAttribute('class');
                body.classList.add('estilo3');

                part1.removeAttribute('class');
                part1.classList.add('estilo3-acordeon1');

                encabezado1.removeAttribute('class');
                encabezado1.classList.add('estilo3-encabezado');

                encabezado2.removeAttribute('class');
                encabezado2.classList.add('estilo3-encabezado');

                encabezado3.removeAttribute('class');
                encabezado3.classList.add('estilo3-encabezado');

                encabezado4.removeAttribute('class');
                encabezado4.classList.add('estilo3-encabezado');

                encabezado5.removeAttribute('class');
                encabezado5.classList.add('estilo3-encabezado');

            }
            break;
        default:
            break;
    }
}

const ejecutar4 = () => {
    let opciones = document.querySelector(`#slcOpciones`);

    const body = document.querySelector('body');
    const link6 = document.querySelector('#link6');
    const link7 = document.querySelector('#link7');
    const link8 = document.querySelector('#link8');

    console.log(body);
    switch (Number(opciones.value)) {
        case 1:
            if (body.classList.contains('estilo2') || body.classList.contains('estilo3')) {
                body.removeAttribute('class');
                body.classList.add('estilo1');

                link6.removeAttribute('class');
                link6.classList.add('estilo1-box7');

                link7.removeAttribute('class');
                link7.classList.add('estilo1-box8');

                link8.removeAttribute('class');
                link8.classList.add('estilo1-box9');



            }
            break;
        case 2:
            if (body.classList.contains('estilo1') || body.classList.contains('estilo3')) {
                body.removeAttribute('class');
                body.classList.add('estilo2');

                link6.removeAttribute('class');
                link6.classList.add('estilo2-box7');

                link7.removeAttribute('class');
                link7.classList.add('estilo2-box8');

                link8.removeAttribute('class');
                link8.classList.add('estilo2-box9');



            }
            break;
        case 3:
            if (body.classList.contains('estilo1') || body.classList.contains('estilo2')) {
                body.removeAttribute('class');
                body.classList.add('estilo3');

                link6.removeAttribute('class');
                link6.classList.add('estilo3-box7');

                link7.removeAttribute('class');
                link7.classList.add('estilo3-box8');

                link8.removeAttribute('class');
                link8.classList.add('estilo3-box9');

            }
            break;
        default:
            break;
    }
}



//El acordeon
acordeon1 = () => {

    //Obtener las referencias
    let ref1 = document.querySelector('#ref1');
    //Switchear la clase
    ref1.classList.toggle('estilo1-contenido-cerrado');
}

acordeon2 = () => {

    //Obtener las referencias
    let ref2 = document.querySelector('#ref2');
    //Switchear la clase
    ref2.classList.toggle('estilo1-contenido-cerrado');
}

acordeon3 = () => {
    //Obtener las referencias
    let ref3 = document.querySelector('#ref3');
    //Switchear la clase
    ref3.classList.toggle('estilo1-contenido-cerrado');
}

acordeon4 = () => {
    //Obtener las referencias
    let ref4 = document.querySelector('#ref4');
    //Switchear la clase
    ref4.classList.toggle('estilo1-contenido-cerrado');
}
