// Lista de personajes de ejemplo
const personajes = [
  { img: "https://via.placeholder.com/300x420?text=Personaje+1", nombre: "Personaje 1", desc: "Descripción breve del personaje 1." },
  { img: "https://via.placeholder.com/300x420?text=Personaje+2", nombre: "Personaje 2", desc: "Descripción breve del personaje 2." },
  { img: "https://via.placeholder.com/300x420?text=Personaje+3", nombre: "Personaje 3", desc: "Descripción breve del personaje 3." },
  { img: "https://via.placeholder.com/300x420?text=Personaje+4", nombre: "Personaje 4", desc: "Descripción breve del personaje 4." },
  { img: "https://via.placeholder.com/300x420?text=Personaje+5", nombre: "Personaje 5", desc: "Descripción breve del personaje 5." },
  { img: "https://via.placeholder.com/300x420?text=Personaje+6", nombre: "Personaje 6", desc: "Descripción breve del personaje 6." },
  { img: "https://via.placeholder.com/300x420?text=Personaje+7", nombre: "Personaje 7", desc: "Descripción breve del personaje 7." },
  { img: "https://via.placeholder.com/300x420?text=Personaje+8", nombre: "Personaje 8", desc: "Descripción breve del personaje 8." },
  { img: "https://via.placeholder.com/300x420?text=Personaje+9", nombre: "Personaje 9", desc: "Descripción breve del personaje 9." },
  { img: "https://via.placeholder.com/300x420?text=Personaje+10", nombre: "Personaje 10", desc: "Descripción breve del personaje 10." },
  { img: "https://via.placeholder.com/300x420?text=Personaje+11", nombre: "Personaje 11", desc: "Descripción breve del personaje 11." },
  { img: "https://via.placeholder.com/300x420?text=Personaje+12", nombre: "Personaje 12", desc: "Descripción breve del personaje 12." }
];
// ↑ Esto es un array de objetos, donde cada objeto representa un personaje con su imagen, nombre y descripción.

let cardsMostradas = 0; // Cuántas cards ya se mostraron
const cardsPorCarga = 3; // Cuántas cards se agregan cada vez

// Función para agregar más cards
function agregarCards() {
  const row = document.getElementById('cards-row');
  // ↑ Busca el elemento con id 'cards-row' donde se van a agregar las cards

  // Agrega hasta 3 cards nuevas, si quedan disponibles
  for (let i = 0; i < cardsPorCarga && cardsMostradas < personajes.length; i++, cardsMostradas++) {
    // ↑ El bucle se repite hasta agregar 3 cards o hasta que no queden más personajes

    const p = personajes[cardsMostradas];
    // ↑ Obtiene el personaje que corresponde mostrar

    // Crea el HTML de la card
    const col = document.createElement('div');
    col.className = "col-12 col-md-4 d-flex justify-content-center";
    // ↑ Crea un div con las clases de Bootstrap para que la card ocupe 1/3 del ancho en pantallas medianas

    col.innerHTML = `
      <div class="card h-100">
        <img src="${p.img}" class="card-img-top" alt="${p.nombre}">
        <div class="card-body">
          <h5 class="card-title">${p.nombre}</h5>
          <p class="card-text">${p.desc}</p>
        </div>
      </div>
    `;
    // ↑ Inserta el HTML de la card con la imagen, nombre y descripción del personaje

    row.appendChild(col);
    // ↑ Agrega la nueva card al contenedor de cards
  }
}

// Mostrar las primeras cards al cargar la página
agregarCards();
// ↑ Llama a la función para mostrar las primeras 3 cards cuando se carga la página

// Cuando el usuario baja hasta el final, agregar más cards
window.addEventListener('scroll', () => {
  // ↑ Escucha el evento de scroll en la ventana

  // Si el usuario llegó al final de la página...
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
    // ↑ Comprueba si el usuario está cerca del final de la página (a 10px del final)
    agregarCards();
    // ↑ Si es así, agrega 3 cards más
  }
});