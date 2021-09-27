var pequenia= document.getElementById('pequenia');
var mediana= document.getElementById('mediana');
var grande= document.getElementById('grande');
var parrafo= document.getElementById('miparrafo');

pequenia.addEventListener('click', fuentePequenia);
mediana.addEventListener('click', fuenteMediana);
grande.addEventListener('click', fuenteGrande);

function fuentePequenia(){
    parrafo.classList.remove('mediana');
    parrafo.classList.remove('grande');
    parrafo.classList.add('pequenia');
}

function fuenteMediana(){
    parrafo.classList.remove('pequenia');
    parrafo.classList.remove('grande');
    parrafo.classList.add('mediana');
}

function fuenteGrande(){
    parrafo.classList.remove('mediana');
    parrafo.classList.remove('pequenia');
    parrafo.classList.add('grande');
}