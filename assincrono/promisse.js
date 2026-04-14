const visualizador = (algo) => console.log(algo);

let minhaPromessa = new Promise((resolve, reject) =>{
    let ok = false;

 //código que pode demorar um tempo para executar.
    setTimeout(() => ok = true, 3000);

    if (ok){
        resolve("OK");
    } else{
        reject ("Erro");
    }
});

minhaPromessa.then(
    (valor) => visualizador(valor),
    (valor) => visualizador(valor)
)