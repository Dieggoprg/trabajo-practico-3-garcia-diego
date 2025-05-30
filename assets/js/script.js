const buscarImput = document.querySelector("form-control me-2");
const btnBuscar = document.querySelector("btn btn-warning");
const btnLimpiar = document.getElementById("btn btn-success");
const contenedorMensajes = document.getElementById("message");
const contenedorDePersonajes = document.getElementById("personaje"); 

// Arreglo para guardar personajes encontrados
let PersonajesArray = [];

// Función para limpiar los resultados anteriores y los mensajes
function LimpiarPersonaje() {
  contenedorDePersonajes.innerHTML = ''; // limpio los personajes 
  contenedorMensajes.textContent = ''; // limpio los mensajes 
  contenedorDePersonajes = [];
}

function showMessage(text) {
  messageContainer.textContent = text;
}

// Función para renderizar tarjetas de personajes
function renderTarjetas(Personaje) {
  Personaje.forEach(Personaje => {
    const Tarjeta = document.createElement('div');
    Tarjeta.classList.add('Tarjeta-Personaje'); 

    Tarjeta.innerHTML = `
      <img src="${Personaje.image}" alt="${character.name}" class ="Personaje-img"/>
      <h3>${Personaje.name}</h3>
      <p><strong>Raza:</strong> ${Personaje.race}</p>
      <p><strong>Género:</strong> ${Personaje.gender}</p>
    `;

    contenedorDePersonajes.appendChild(Tarjeta);
  });
}

// Función asincrónica para buscar personajes por nombre usando la API de Dragon Ball
async function searchCharactersByName(name) {
  try {
    const respuesta = await fetch("https://dragonball-api.com/api/characters?name=${encodeURIComponent(name)}");

    if (!respuesta.ok) {
      throw new Error("Error al consultar la API. Código: ${response.status}");
    }

    const data = await response.json();

    if (!data.items || data.items.length === 0) {
      showMessage('No se encontraron personajes con ese nombre.');
      return;
    }

    // Si hay personajes, renderizarlos
    renderTarjetas(data.items);
  } catch (error) {
    showMessage('Ocurrió un error al buscar personajes.');
    console.error(error);
  }
}

 









