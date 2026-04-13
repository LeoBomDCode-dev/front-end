const pessoa = {
    nome: "João",
    sobrenome: "Rocella",
    idade: 40,
    cargo: "instrutor"
};

const entidade = new Map ([
    ["nome", "joão"],
    ["sobrenome", "Roccella"],
    ["idade", 40],
    ["cargo", "Instrutor"]
]); 

console.log(entidade.get("sobrenome"));
console.log(pessoa.sobrenome);

const professor = JSON.stringify(pessoa);
console.log(professor);

const aluno = '{"nome":"Bento", "sobrenome":"Andrade", "idade":69, "matricula": "9094"}';
const alunoObjeto = JSON.parse(aluno); 
console.log(alunoObjeto);
console.log(alunoObjeto.nome);
console.log(aluno.nome);
