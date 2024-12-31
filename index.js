function copiarTexto() {
    const copiar = "script"

    navigator.clipboard.writeText(copiar)
}

const sim = document.getElementById("sim")
    const botao1 = document.getElementById("botao")
    
    botao1.addEventListener("click", function() {
        sim.style.opacity = 1;
    });
