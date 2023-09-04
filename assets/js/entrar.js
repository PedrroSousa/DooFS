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
    let listaUser = []

    let userValid = {
        nome: '',
        email: '',
        senha: ''
    };

    listaUser = JSON.parse(localStorage.getItem('listaUser'));

    listaUser.forEach((item) => {
        if(email.value == item.emailS && senha.value == item.senhaS) {
            userValid = {
                nome: item.nomeS,
                email: item.emailS,
                senha: item.senhaS
            }
        }   
    });

    if(email.value == userValid.email && senha.value == userValid.senha) {
        window.location.href = 'conteudo.html'

        let token = Math.random().toString(16).substr(2)
        localStorage.setItem('token', token)

        localStorage.setItem('userLogado', JSON.stringify('userValid'))
    } else {
        email.setAttribute('style', 'outline-color: red');
        senha.setAttribute('style', 'outline-color: red');
        msgError.setAttribute('style', 'display: block');
        msgError.innerHTML = 'Usuário ou senha incorreta!'
        email.focus();
    };

}
document.querySelector('#entrar-btn').onclick = entrar;