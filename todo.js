//adicionar nome no titulo
function addYourName(){
    let inName = document.getElementById("entra-nome");
    let outName = document.getElementById("add-nome");

    let nome = inName.value;
    if(nome != ""){
        outName.innerHTML = "Seja bem-vindo " + nome + "!";
        document.getElementById('inicio').style.display = "none"
        document.getElementById('segundo').style.display = "block";
    }else{
        alert('POR FAVOR, INSIRA SEU NOME PARA PROSSEGUIR')
    }
}
const addArray = (tarefa)=>{
    let getLocalStorage = localStorage.getItem("New Todo");
    if(getLocalStorage == null){
        listArr = [];
    }else {
        listArr = JSON.parse(getLocalStorage); //tranforma json string em a js objeto
    }
    listArr.push(tarefa);
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    mostrarItem();
   
}
const mostrarItem = () => {
    let getLocalStorage = localStorage.getItem("New Todo");
    if(getLocalStorage == null){
        listArr = [];
    }else {
        listArr = JSON.parse(getLocalStorage); //tranforma json string em a js objeto
    }
    //criar os elementos
    let newItem = document.createElement('label');
    newItem.classList.add('fazer-item');
    newItem.id = "criar-item"
    listArr.forEach((element, indice) => {
        newItem.innerHTML = `<input type="checkbox">
        <p class="box-text">${element}</p>`
    });
    document.getElementById('toDo-List').appendChild(newItem);
}
const addTarefa = () =>{
    //resgatar da caixa de texto
    let inputTarefa = document.getElementById('addTarefa').value;
    if(inputTarefa != ""){
        addArray(inputTarefa);
        document.getElementById('btn-limpar').style.display = "flex"
    }else{
        alert('POR FAVOR, DIGITE ALGUMA TAREFA')
    }
}
const teclaEnter = (event) => {
    const tecla = event.key;
    if(tecla === 'Enter'){
        addTarefa();
        event.target.value = ""; // limpar a caixa depois de apertar enter
    }
}
document.getElementById('new-item').addEventListener('keypress', teclaEnter);

const limparTarefa = () => {
    const todoList = document.getElementById('toDo-List');
    while(todoList.firstChild){
        todoList.removeChild(todoList.lastChild);
    }
}

const deleteAll = document.getElementById('btn-limpar');
deleteAll.onclick = () =>{
    listArr = [];
    localStorage.setItem("New Todo", JSON.stringify(listArr));
    limparTarefa();
}