// General Formula: (base*height)/2
var base = prompt("Please enter the base value");
var height = prompt("please enter the height value");
var area = (base * height) / 2;
console.log ('Base :' + base + ' height :' + height + ' Area :' + area );
//General formula : s= (a+b+c)/2
// Area : sqrt(s*(s-a)*(s-b)*(s-c))
var a = prompt ("Please enter the number a");
var b = prompt ("Please enter the number b");
var c = prompt ("Please enter the number c");
var s = (a + b + c)/2;
console.log("General formula : s= (a+b+c)/2 = "  +s);
var temp = s*(s-a)*(s-b)*(s-c);
var area = Math.sqrt(temp);
console.log("Area : sqrt(s*(s-a)*(s-b)*(s-c))= "  +area);