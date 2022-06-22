 var intervalo = 3000;

function  slaide1() {
    document. getElementById("banner") .src="../imagens/benner1.jpg";
    setTimeout("slaide2 ()",intervalo); 
}

function  slaide2(){
    document. getElementById("banner") .src="../imagens/benner2.png";
    setTimeout("slaide3 ()",intervalo);
}

function  slaide3(){
    document. getElementById("banner") .src="../imagens/benner3.png";
        setTimeout ("slaide4 ()",intervalo);
}
function slaide4(){
    document. getElementById("banner") .src="../imagens/benner4.png" ;
    setTimeout( "slaide5 ()",intervalo);
}
function slaide5(){
    document. getElementById("banner") .src="../imagens/benner5.jpg";
    setTimeout("slaide1 ()",intervalo);
}