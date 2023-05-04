let contador = 0
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista');

function addTarefa() {
    let valorInput = input.value; 

    if ((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)) {

        ++contador;

        let novoItem = `<div id="${contador}" class="item">
        <div onclick="marcarTarefa(${contador})" class="item-icone">
            <img class="unchecked" id="icone_${contador}" src="images/radio_button_unchecked_black_24dp.svg" alt="">
            <img class="checked" id="icone_${contador}" src="images/check_circle_black_24dp.svg" alt="">
        </div>
        <div onclick="marcarTarefa(${contador})" class="item-nome">
            ${valorInput}
        </div>
        <div class="item-botao">
            <button onclick="deletar(${contador})" class="delete"><img src="images/delete_white_24dp.svg" alt=""></button>
        </div>
    </div>`;

    main.innerHTML += novoItem
    input.value = "";
    input.focus();
    }
}

function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcarTarefa(id) {
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');

    if(classe == "item") {
        item.classList.add('clicado');
        item.parentNode.appendChild(item);

    } else{
        item.classList.remove('clicado');
    }
}

input.addEventListener("keyup", function(event) {
    if(event.keyCode === 13) {
        event.preventDefault();
        btnAdd.click();
    }
})