function duplicarNum(){
    var contenido = document.getElementById('numero').innerHTML;
    var num = parseInt(contenido);

    contenido = num * 2;

    document.getElementById('numero').innerHTML = contenido;
}