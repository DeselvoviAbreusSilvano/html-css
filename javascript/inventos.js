let btn = document.querySelector('#verSenha')
let btnConfirmaSenha = document.querySelector('#verConfirmaSenha')


let Nome = document.querySelector('#Nome')
let tabelanome = document.querySelector('#tabelanome')
let validnome = false

let Usuario = document.querySelector('#Usuario')
let tabelausuario = document.querySelector('#tabelausuario')
let validusuario = false

let Senha = document.querySelector('#Senha')
let tabelasenha = document.querySelector('#tabelasenha')
let validsenha = false

let Confirmarsenha = document.querySelector('#Confirmarsenha')
let tabelaconfirmarsenha = document.querySelector('#tabelaconfirmarsenha')
let validconfirmarsenha = false

let msgerror = document.querySelector('#msgerror')
let msgSuccess = document.querySelector('#msgSuccess')

Nome.addEventListener('keyup', ()=>{
    if(Nome.value.length <= 2){
        tabelanome.setAttribute('style','color: red ;')
        tabelanome.innerHTML= 'Nome*insira no minimo tres caracterer'
        Nome.setAttribute('style','border-color: red ;')
        validnome = false

    }else{
        tabelanome.setAttribute('style','color: green ;')
        tabelanome.innerHTML= 'Nome'
        Nome.setAttribute('style','border-color: green ;')
        validnome = true

    }
})


Usuario.addEventListener('keyup', ()=>{
    if(Usuario.value.length <= 2){
        tabelausuario.setAttribute('style','color: red ;')
        tabelausuario.innerHTML= 'Usuario*insira no minimo tres caracterer'
        Usuario.setAttribute('style','border-color: red ;')
        validusuario = false
    }else{
        tabelausuario.setAttribute('style','color: green ;')
        tabelausuario.innerHTML= 'Usuario'
        Usuario.setAttribute('style','border-color: green ;')
        validusuario = true
    }
})


Senha.addEventListener('keyup', ()=>{
    if(Senha.value.length <= 5){
        tabelasenha.setAttribute('style','color: red ;')
        tabelasenha.innerHTML= 'Senha*insira no minimo 6 caracterer'
        Senha.setAttribute('style','border-color: red ;')
        validsenha = false
    }else{
        tabelasenha.setAttribute('style','color: green ;')
        tabelasenha.innerHTML= 'Senha'
        Senha.setAttribute('style','border-color: green ;')
        validsenha = true
    }
})



Confirmasenha.addEventListener('keyup', ()=>{
    if(Senha.value !=  Confirmasenha.value){
        tabelaconfirmar.setAttribute('style','color: red ;')
        tabelaconfirmar.innerHTML= 'Usuario a confirmar*As senhas não confiram'
        Confirmasenha.setAttribute('style','border-color: red ;')
        validconfirmarsenha = false
    }else{
        tabelaconfirmar.setAttribute('style','color: green ;')
        tabelaconfirmar.innerHTML= 'Confirmar senha'
        Confirmasenha.setAttribute('style','border-color: green ;')
        validconfirmarsenha = true
    }
})




function Cadastrar(){
    if (validnome && validusuario && validsenha && validconfirmarsenha ) {

        let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')
        listaUser.push(
            {
                nomeCad: Nome.value,
                userCad: Usuario.value,
                senhaCad: Senha.value
            }
        )

        localStorage.setItem('listaUser', JSON.stringify(listaUser))



        msgSuccess.setAttribute('style','text-align: center;  border-radius: 8px;  background-color: green ; color: white;')
        msgSuccess.innerHTML= 'Usuario cadastrado'
        msgerror.setAttribute ('style','text-align: none;  border-radius: none;  background-color: none; color: none;')
        msgerror.innerHTML= ''  

        window.alert( msgSuccess.innerHTML= 'Usuario a cadastra-se....')
            setTimeout(()=>{
                
              window.location.href =''

            }, 3000)
 
        
    } else {
        msgerror.setAttribute ('style','text-align: center;  border-radius: 8px;  background-color: red ; color: white;')
        msgerror.innerHTML= 'Priencha todos os campos antens de cadastrar-se!'
        msgSuccess.innerHTML= ''  
        msgSuccess.setAttribute('style','text-align: none;  border-radius: none;  background-color: none; color: none;') 

    }
} 