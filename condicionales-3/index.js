var edad = 0; 
var dias = 0;
var horas = 0;
var nombre= "";

nombre = prompt(" Ingrese el Nombre");
edad = prompt (" Ingrese la edad "); 

if( edad >= 18 ){
dias = edad * 365

document.write(nombre + "has vivido " + horas);
}else if(edad % 2 == 0){
    horas = edad * 365 * 24
    document.write("has vivido " + horas);
}


