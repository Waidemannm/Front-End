let gd;
let gd2;
console.log(typeof(gd));
gd = "";
console.log(typeof(gd));
gd = 122.45;
console.log(typeof(gd) == typeof(gd2));
let nr1 = 10;
let nr2 = 20;
let resultado = nr1 + nr2;
console.log("O resultado da some é: " + resultado);
console.log("O resultado da some é: ", (nr1 + nr2));
console.log(`O resultado da some é:  ${nr1 + nr2}`);
let nr = 10;
let resul = (nr % 2 === 0)? "É par" : "É impar";
console.log(resul);

let texto = "Casa";

texto = "M" + texto.slice(1);
console.log(texto); // "Masa"
