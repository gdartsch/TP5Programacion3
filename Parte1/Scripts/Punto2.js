function mostrarMeses(){
    var meses = ["Enero",
                 "Febrero",
                 "Marzo",
                 "Abril",
                 "Mayo",
                 "Junio",
                 "Julio",
                 "Agosto",
                 "Septiembre",
                 "Octubre",
                 "Noviembre",
                 "Diciembre"];

    for(i = 0; i < meses.length; i++){
        document.write(meses[i]);
    }

    i = 0;

    while(i < meses.length){
        document.write(meses[i]);
        i++;
    }
}