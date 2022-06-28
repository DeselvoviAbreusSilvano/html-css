 let.btn = document.querySelector('.fa fa-eye')

btn. addEventListener('click',() => {
    let Senha = document.querySelector('#Senha')

    if(inputSenha.getAttribute('type') =='password'){
        inputSenha.setAttribute('type', 'text')
    } else{
        Senha.setAttribute('type', 'password')
    }
})

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
    listaUser.forEach((item) =>{
        if (Usuario.value == item.userCad && Senha.value == item.senhaCad) {
            
            uservalid  ={
                nome: item.nomeCad,
                user: item.userCad,
                senha: item.senhaCad
            }
        }
    })
    
    if (Usuario.value == uservalid.user && Senha.value == uservalid.senha ){
         window.location.href ='https://deselvoviabreussilvano.github.io/html-css/nossa%20loja.html'
         
         let token = Math.rendom().toString(16).substr(2) + Math.rendom().toString(16).substr(2)
         localStorage.setItem('token',token)
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
 
function sair() {
    localStorage.removeItem('token') 
    window.location.href ='https://deselvoviabreussilvano.github.io/html-css/'   
}