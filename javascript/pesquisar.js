
    const form = document.querySelector('.formas')
    const search = document.querySelector('.fazer-busca')
    const btn = document.querySelector('.btn')

    btn.addEventListener("click", function(){
        if (search.value.length > 0 ) {
            window.location = "https://www.google.com.br/search?q=" + search.value;
        } else {
            form.classList.toggle(".active")
        }
    } )