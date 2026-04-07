 function pagina(){

 const container = document.createElement('div');
container.className = 'container';

 const titulo = document.createElement('h1');
 titulo.innerText = 'Lista de Tarefas'; 

 const inputSection = document.createElement('div');
inputSection.className = 'input-section'

 const inputTarefa = document.createElement('input');
inputTarefa.type = 'text';
inputTarefa.placeholder = 'Digite uma nova tarefa...';

 const btnAdicionar = document.createElement('button');
btnAdicionar.innerText = 'Adicionar';

 const listaTarefas = document.createElement('ul');

 

inputSection.appendChild(inputTarefa);
inputSection.appendChild(btnAdicionar);

container.appendChild(titulo);
container.appendChild(inputSection);
container.appendChild(listaTarefas);

document.body.appendChild(container);

function adicionarTarefa() {
    if (inputTarefa.value.trim() === '') {
        alert('Por favor, digite uma tarefa!');
        return;
    }

    const li = document.createElement('li');
    li.innerText = inputTarefa.value;

    const btnRemover = document.createElement('button');
    btnRemover.innerText = 'X';
    btnRemover.classList.add('btn-remover');

    btnRemover.addEventListener('click', function() {
        listaTarefas.removeChild(li);
    });

    li.appendChild(btnRemover);
    listaTarefas.appendChild(li);

    inputTarefa.value = '';
    inputTarefa.focus();
}

btnAdicionar.addEventListener('click', adicionarTarefa);

inputTarefa.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        adicionarTarefa();
    }
});
 }

//     const input = document.getElementById("tarefaInput");
//     const botao = document.getElementById("btnAdicionar");
//     const lista = document.getElementById("listaTarefas");

//     botao.addEventListener("click", ()=>{ 
//         const novaTarefa = document.createElement("li");
//         const texto = input.value.trim();

//     if(texto === ""){
//         alert("Digite algo!");
//         return;    
//     }

//     novaTarefa.textContent = texto; //adiciona b
//     novaTarefa.classList.add('destaque');
//     novaTarefa.setAttribute("data-tarefa", texto.toLowerCase());
//     novaTarefa.style.color = "#333";

//     lista.appendChild(novaTarefa); //adiciona elemento
    
//     novaTarefa.addEventListener("click", () => {
//         const tarefa = novaTarefa.getAttribute("data-tarefa");
//         console.log("Renovando: ", tarefa);
//         novaTarefa.classList.remove("destaque"); //remove a classe html destaque
//         novaTarefa.classList.add("removido"); //acrescenta a classe html removido
//         novaTarefa.innerHTML += "(REMOViDA)"; //acrescenta o texto (removida) ao texto da tarefa
//         setTimeout(()=>{lista.removeChild(novaTarefa);}, 500); //remove tarefas depois de 1 segundo

//         input.value = "";
//     });

// });
// }


