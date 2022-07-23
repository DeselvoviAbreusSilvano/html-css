//  Animação todos os meu tens da telas 
const item = document.querySelectorAll("[data-anime]");
const animeScroll = () =>{
    const windowTop = window.pageXOffset + window.innerHeight * 0.85;

    item.forEach((element) =>{
        if (windowTop < element.offsetTop ) {
            element.classList.add("animate");
        } else{
            element.classList.remove("animate");
        }
    });
};
animeScroll();

window.addEventListener("scroll", ()=>{
    animeScroll();
})