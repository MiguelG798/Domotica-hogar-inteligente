window.onscroll = miFuncion;

function miFuncion(){
    let scroll = document.body.scrollTop || document.documentElement.scrollTop;
    let heing = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (scroll/ heing)* 100;
    document.getElementById('barra').style.width = scrolled + '%';
}