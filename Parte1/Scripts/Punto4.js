function calcularAumento(){
    var sueldo = parseFloat(prompt("Ingrese el sueldo", ""));
    var antiguedad = parseFloat(prompt("Ingrese la antigüedad", ""));

    if(sueldo < 500 && antiguedad >= 10){
        alert("El aumento es de 20%, el sueldo a pagar es: " + sueldo * 1.2);
    }else if(sueldo < 500 && antiguedad < 10){
        alert("El aumento es de 5%, el sueldo a pagar es: " + sueldo * 1.05);
    }else{
        alert("No hay aumento, el sueldo a pagar es: " + sueldo);
    }
}