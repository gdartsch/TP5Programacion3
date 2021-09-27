function contador() 
{ 
    var contenedor=document.getElementById('numero');
    var num = parseInt(contenedor.childNodes[0].nodeValue);
    num += 1;
    contenedor.childNodes[0].nodeValue = num;
}