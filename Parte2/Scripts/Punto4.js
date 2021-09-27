function cambiarColor(){
    var parrafos = document.getElementsByTagName('p');

    for(i = 0; i<parrafos.length; i++){
        parrafos[i].style.backgroundColor = 'blue';
    }
}