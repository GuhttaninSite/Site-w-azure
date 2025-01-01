alert("Site e bot desenvolvidos por Guhttanin. Se para você o site está bugado, vá nos três pontinhos ou nas três barrinhas e habilite o modo de computador.")

function copiarTexto() {
    const copiar = 'getgenv().Team = "Pirates" loadstring(game:HttpGet("https://api.luarmret/files/v3/loaders/3b2169cf53bc6104dabe8e19562e5cc2.lua"))()'
    
    navigator.clipboard.writeText(copiar)
}

const sim = document.getElementById("sim")
const botao1 = document.getElementById("botao")
    
setTimeout(function(){
    botao1.addEventListener("click", function() {
        sim.style.opacity = 1;
    });
},1)
