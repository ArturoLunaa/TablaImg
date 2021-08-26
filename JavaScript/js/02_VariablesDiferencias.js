// LET y VAR la diferencia es el elcance y como actuan
document.write("<h1>Diferencias entre let y var</h1>")
let var1 = "México";
let var2 = "América";

//El uso de var la profundidad es mayor y puede cambiar valores de variables locales o subfragmentos
/*var numero = 40;
console.log(numero);
if(true){//para entrar en fragmento de código distinto al global
    var numero = 69;
    console.log(numero);
}
console.log(numero);*/

//let
let numero = 40;
console.log(numero);

if(true){//para entrar en fragmento de código distinto al global
    let numero = 69;
    console.log(numero);
}
console.log(numero);