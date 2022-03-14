const validar=() =>{

    const nombre =  document.getElementById("nombre");
    const correo =  document.getElementById("correo");
    const asunto =  document.getElementById("asunto");
    const mensaje =  document.getElementById("mensaje");
    const formulario = document.getElementById("formulario");

    formulario.addEventListener("submit", e => {
        e.preventDefault();

        if(nombre.value == 0 && correo.value == 0 && asunto.value == 0 && mensaje.value == 0){
        alert("Debes diligenciar todos los campos");
        formulario.reset();

        } else if (nombre.value == 0){
            alert("Debes diligenciar el campo nombre");
        formulario.reset();

        } else if (asunto.value == 0){
            alert("Debes diligenciar el campo asunto");
        formulario.reset();

        } else if (correo.value == 0){
            alert("Debes diligenciar el campo correo");
        formulario.reset();

        }else if (mensaje.value == 0){
            alert("Debes diligenciar el campo mensaje");
        formulario.reset();
        }else{
            alert("Mensaje enviado")
            mostrarDatos();
        }

    });    
     
     
}

const mostrarDatos = () => {
    console.log("nombre:",nombre.value);
    console.log("correo:",correo.value);
    console.log("asunto:",asunto.value);
    console.log("mensaje:",mensaje.value);

}