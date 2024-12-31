function copiarTexto() {
    const message = document.getElementById("text")
    
    message.style.animation = "flyDown 5s ease-out forwards"
    
    const copiar = "script"

    navigator.clipboard.writeText(copiar)
}