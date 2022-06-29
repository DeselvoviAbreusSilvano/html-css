 

function entrar(){
    let Usuario = document.querySelector('#Usuario')
    let tabelausuario = document.querySelector('#tabelausuario')

    let Senha = document.querySelector('#Senha')
    let tabelasenha = document.querySelector('#tabelasenha')

    let msgerror = document.querySelector('#msgerror')
    let listaUser = []

    let uservalid = {
        nome:'',
        user:'',
        senha:''
    }
    listaUser = JSON.parse(localStorage.getItem('listaUser'))
    listaUser.forEach((item) => {

        if (Usuario.value == item.userCad && Senha.value == item.senhaCad) {
            
            uservalid  ={
                nome: item.nomeCad,
                user: item.userCad,
                senha: item.senhaCad
            }
        }
    })        

    if (Usuario.value == uservalid.user && Senha.value == uservalid.senha) {

        Window.Location.href="https://deselvoviabreussilvano.github.io/html-css/nossa%20loja.html"

        let token = Math.random().toString(16).substr(2) + Math.random().toString(16).substr(2)
        localStorage.setItem('token',token)

        localStorage.setItem('userLogado', JSON.stringify(uservalid))
        
    } else {
        
        tabelausuario.setAttribute('style', 'color: red')
       Usuario.setAttribute('style', 'border-color: red')
       tabelasenha.setAttribute('style', 'color: red')
       Senha.setAttribute('style', 'border-color: red')
       msgerror.setAttribute ('style','text-align: center;  border-radius: 8px;  background-color: red ; color: white;')
       msgerror.innerHTML= 'Usuário ou senha inserida estão incorretos!'

       Usuario.focus()
    }

    }


    let userLogado = JSON.parse(localStorage.getItem('userLogado'))

    let logado = document.querySelector('logado')
    logado.innerHTML= `Olá ${userLogado.nome}`

    if(localStorage.getItem('token') == null){
        alert('Você precisa estar logado para acessar esta página')
        Window.Location.href ="https://deselvoviabreussilvano.github.io/html-css/log.html"
    }
    function sair(){
        localStorage.removeItem('token')
        localStorage.removeItem('userLogado')
    Window.Location.href ="https://deselvoviabreussilvano.github.io/html-css/log.html"
    }