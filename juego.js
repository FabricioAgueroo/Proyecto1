function arrastrarImagen(event) {
let immagenes=event.target.id;
event.dataTransfer.setData("Text",immagenes)
console.log("se hizo el arrastre");
}

function recibir(event) {
    event.preventDefault()
}

function soltarZona(event) {    
    let imagenNueva=event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(imagenNueva));
    event.target.classList.add("sindisplay");
  console.log("funciona");
    
  }
  function reinicio() {
    window.location.reload();
  }