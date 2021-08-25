document.write("<h1>Práctica Raices</h1>");

var a = 6;//2
var b = 12;//7
var c = 5;//3

var x1 = ((-b) + Math.sqrt(Math.pow(b,2)-(4*a*c)))/(2*a);
var x2 = ((-b) - Math.sqrt(Math.pow(b,2)-(4*a*c)))/(2*a);

console.log("El resultado de x1 es:",x1);
console.log("El resultado de x2 es:",x2);

