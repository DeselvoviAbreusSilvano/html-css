
let userlogado = JSON.parse(localStorage.getItem('userlogado'))

    let logado = document.querySelector('#logado')
   logado.innerHTML = `Olá ${userlogado.nome}` 

    if(localStorage.getItem('token') == null){
        alert('Você precisa estar logado para acessar esta página')
        window.location.href="https://deselvoviabreussilvano.github.io/html-css/log.html"
    }
    function sair(){
        let entrarUsuario = document.querySelector('#entrarUsuario')
        let usuario = document.querySelector('#usuario')
    
        localStorage.removeItem('token')
        localStorage.removeItem('userLogado')
    window.Location.href ="https://deselvoviabreussilvano.github.io/html-css/log.html"
    }