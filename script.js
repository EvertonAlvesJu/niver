// Script para mostrar o texto e corações ao clicar no botão de coração
document.getElementById("heartButton").addEventListener("click", function() {
    // Exibe o texto abaixo do carrossel (uma única vez)
    var textMessage = document.getElementById("textMessage");
    if (!textMessage.classList.contains("show")) {
        textMessage.classList.add("show"); // Exibe o texto
    }

    // Cria e exibe os corações flutuantes por toda a tela
    for (let i = 0; i < 10; i++) { // Cria 10 corações por clique
        var heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "&#10084;"; // O símbolo do coração
        heart.style.left = Math.random() * window.innerWidth + "px"; // Posiciona o coração aleatoriamente na largura da tela
        heart.style.top = Math.random() * window.innerHeight + "px"; // Posiciona o coração aleatoriamente na altura da tela
        heart.style.animationDelay = Math.random() * 2 + "s"; // Atraso na animação de cada coração

        document.body.appendChild(heart);

        // Remove o coração após a animação (2 segundos)
        setTimeout(() => {
            heart.remove();
        }, 2000);
    }
});