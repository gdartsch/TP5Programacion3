function letraDNI(){
    var dni;
    
    while(true){
        dni = parseInt(prompt("Ingrese su dni", ""));
        if(dni < 0 || dni > 99999999){ continue;}
        else{ break;}
    }
    var letraIngresada = prompt("Ingrese su letra", "").toString().toUpperCase();

    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    var letra = letras[dni%23].toString();
    alert("Su letra es: " + letras[dni%23]);

    if(letraIngresada != letra){
        alert("La letra que ha indicado no es correcta");
    }else{
        alert("Las letras y DNI indicados son correctos");
    }
}