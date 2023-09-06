let userLogado = JSON.parse(localStorage.getItem('userLogado'));

let logado = document.querySelector('#logado');

//logado.innerHTML = `Bem Vindo ${userLogado.nome}`

if(localStorage.getItem('token') == null) {
    alert('Você precisa estar logado!');
    window.location.href = 'index.html'
}

function sair () {
    localStorage.removeItem('token');
    window.location.href = 'index.html';
}
document.querySelector('#sair-btn').onclick = sair;

const apikey = '1c9ff41c'

const formBusca = document.querySelector('form');

formBusca.onsubmit = (evento) => {
    evento.preventDefault();
    
    const buscar = evento.target.busca.value;

    let msgError = document.querySelector('#msgError')

    if (buscar == "") {
        msgError.innerHTML = 'Campo de pesquisa vazio'
        return;
    } else {
        msgError.innerHTML = 'Resultados'
    }

    fetch(`https://www.omdbapi.com/?apikey=${apikey}&s=${buscar}`)
        .then(result => result.json())
        .then(json => carregaLista(json));
}

const carregaLista = (json) => {
    const lista = document.querySelector(".lista-item");
    lista.innerHTML = "";

    json.Search.forEach(element => {
        console.log(element)
        let item = document.createElement("div");
        item.classList.add("item");

        item.innerHTML = `<img src="${element.Poster}" /><h2>${element.Title}</h2>`

        lista.appendChild(item);

        
    });
}