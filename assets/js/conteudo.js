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