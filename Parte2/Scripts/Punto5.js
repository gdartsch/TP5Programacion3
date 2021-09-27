function mostrarSoluciones(){
    var li1 = document.createElement('li');
    var li2 = document.createElement('li');
    var textoLi1 = document.createTextNode('Solucion 1');
    var textoLi2 = document.createTextNode('Solucion 2');
    var lista=document.getElementById('lista'); 
    li1.appendChild(textoLi1);
    li2.appendChild(textoLi2);
    lista.appendChild(li1);
    lista.appendChild(li2);
}