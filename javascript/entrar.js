 

function Cadastrar (){
    let entrarUsuario = document.querySelector('#entrarUsuario')
    let usuario = document.querySelector('#usuario')

    let entrarSenha = document.querySelector('#entrarSenha')
    let senha = document.querySelector('#senha')

    let msgerror = document.querySelector('#msgerror')
    let listaUser = []

    let uservalid = {
        nome:'',
        user:'',
        senha:''
    }
    listaUser = JSON.parse(localStorage.getItem('listaUser'))
    listaUser.forEach((item) => {

        if (entrarUsuario.value == item.userCad && entrarSenha.value == item.senhaCad) {
            
            uservalid  ={
                nome: item.nomeCad,
                user: item.userCad,
                senha: item.senhaCad
            }
        }
    })        

    if (entrarUsuario.value == uservalid.user && entrarSenha.value == uservalid.senha) {
        window.location.href="https://deselvoviabreussilvano.github.io/html-css/nossa%20loja.html"

        let token = Math.random().toString(16).substr(2) + Math.random().toString(16).substr(2)
        localStorage.setItem('token',token)
        localStorage.setItem('userlogado', JSON.stringify(uservalid))
        
    } else {
        
        usuario.setAttribute('style', 'color: red')
        entrarUsuario.setAttribute('style', 'border-color: red')
       senha.setAttribute('style', 'color: red')
       entrarSenha.setAttribute('style', 'border-color: red')
       msgerror.setAttribute ('style','text-align: center;  border-radius: 8px;  background-color: red ; color: white;')
       msgerror.innerHTML= 'Usuário ou senha inserida estão incorretos!'

       entrarUsuario.focus()
    }
    
    }