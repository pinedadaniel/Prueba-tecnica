var horas = 0;
var dias = 0;
var nombre = "jhon";
var edad = 15;

if ( edad >= 18){
    dias = edad * 365;
    console.log(nombre +  "has vivido" + dias)

}else if (edad % 2 == 0 ){
    horas = edad * 365 * 24;
    console.log("has vivido" + horas)
}else{
    console.log( nombre + " hola")
}

