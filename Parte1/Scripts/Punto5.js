function validar(){
    var edad = document.querySelector('input[name="edad"]:checked').value;

    if(edad == "SI"){
        alert("Usted puede ingresar al sitio");
    }else{
        alert("Usted no puede ingresar al sitio");
    }
}