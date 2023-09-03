let nome = document.querySelector('#nome');
let nomeLabel = document.querySelector('#nome-label');
let nomeValid = false

let email = document.querySelector('#email');
let emailLabel = document.querySelector('#email-label');
let emailValid = false

let senha = document.querySelector('#senha');
let senhaLabel = document.querySelector('#senha-label');
let senhaValid = false

let confirmarSenha = document.querySelector('#confirmar-senha');
let confirmarSenhaLabel = document.querySelector('#confirmar-senha-label');
let confirmarSenhaValid = false

nome.addEventListener('keyup', () => {
    if(nome.value.length <= 2 ) {
        nome.setAttribute('style', 'outline-color: red');
        nomeValid = false
    }else {
        nome.setAttribute('style', 'outline-color: green');
        nomeValid = true
    }
})

email.addEventListener('keyup', () => {
    if(email.value.length <= 5 ) {
        email.setAttribute('style', 'outline-color: red');
        emailValid = false
    }else {
        email.setAttribute('style', 'outline-color: green');
        emailValid = true
    }
})

senha.addEventListener('keyup', () => {
    if(senha.value.length <= 7) {
        senha.setAttribute('style', 'outline-color: red');
        senhaValid = false
    } else {
        senha.setAttribute('style', 'outline-color: green');
        senhaValid = true
    }
})

confirmarSenha.addEventListener('keyup', () => {
    if(senha.value != confirmarSenha.value) {
        confirmarSenha.setAttribute('style', 'outline-color: red');
        confirmarSenhaValid = false
    } else {
        confirmarSenha.setAttribute('style', 'outline-color: green');
        confirmarSenhaValid = true
    }
})

function criar () {
    if(nomeValid && emailValid && senhaValid && confirmarSenhaValid) {
        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');

        listaUser.push(
        {
                nomeS: nome.value,
                emailS: email.value,
                senhaS: senha.value
        }
        )

        localStorage.setItem('listaUser', JSON.stringify(listaUser))

        window.location.href = 'entrar.html'
    } else {
        
    }
}
document.querySelector('#criar').onclick = criar;