// window.onload nos asegura que primero cargara el html
window.onload = () => {
    const paragraph = document.getElementById('text')
    // inner text cambia el texto de un ID de HTML
    paragraph.innerText = 'updated by js'
    // inner html cambia el tipo de contenedor que uso
    paragraph.innerHTML = '<li>element 1</li><li>element 2</li>'
}