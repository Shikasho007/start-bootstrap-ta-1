window.onscroll = function() {
        scroll();
    }
    /* Função Botão Topo */
function scroll() {
    var btn = document.getElementById("btnTop");
    if (document.documentElement.scrollTop > 200) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
}
/* Função ir para o Topo */
function backToTop() {
    document.documentElement.scrollTop = 0;
}