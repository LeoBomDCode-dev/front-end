const letras = new Set();

letras.add("a");
letras.add("b");
letras.add("c");
letras.add("d");
letras.add("e");

console.log(letras);

const letrasGregas = new Set(["alfa", "beta", "gama"]);

console.log(letrasGregas);

letrasGregas.add("ômega");

console.log(letrasGregas);

console.log(letrasGregas.has("ômega"));