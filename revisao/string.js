 let texto = "Olá, Mundo!"
 console.log(texto.length);
 console.log(texto[0]);
 console.log(texto[1]);
 console.log(texto[2]);
 console.log(texto[3]);
 console.log(texto[4]);
 console.log(texto[5]);
 console.log(texto[6]);
 console.log(texto[7]);
 console.log(texto[8]);
 console.log(texto[9]);
 console.log(texto[10]);
 

let nome = "juliana";
console.log = (nome.split("").map(palavra => palavra.charAt(0).toUpperCase()
+ palavra.slice(1).toLowerCase()));

let frase = "Aprender JavaScript é divertido!";
console.log(frase.includes("Javascript"))

console.log("HTML é fácil".replaceAll("HTML", "Javascript"));

let textoSujo = "Olá,  Mundo  !"
console.log(textoSujo.trim());