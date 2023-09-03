let email = document.querySelector('#email');
let emailLabel = document.querySelector('#email-label');

let senha = document.querySelector('#senha');
let senhaLabel = document.querySelector('#senha-label');

function entrar () {
    let email = document.querySelector('#email');
    let emailLabel = document.querySelector('#email-label');

    let senha = document.querySelector('#senha');
    let senhaLabel = document.querySelector('#senha-label');

    let msgError = document.querySelector('#msgError');
    let listaEmail = []

    let emailValid = {
        nome: '',
        email: '',
        senha: ''
    };

    listaEmail = JSON.parse(localStorage.getItem('listaUser'));

    console.log(listaUser);

}
document.querySelector('#entrar-btn').onclick = entrar;