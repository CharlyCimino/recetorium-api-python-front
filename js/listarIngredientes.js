// Realizamos la solicitud GET al servidor para obtener todos los ingredientes
const obtenerTodosLosIngredientes = async (evt) => {
    try {
        const resp = await fetch(`${URL}/api/ingredientes`);
        if (resp.ok) {
            const data = await resp.json();
            const cuerpoDeTabla = document.querySelector("#tablaDeIngredientes>tbody");
            cuerpoDeTabla.innerHTML = "";
            data.ingredientes.forEach(ing => {
                const fila = document.createElement('tr');
                fila.innerHTML = nuevaFila(ing);
                cuerpoDeTabla.appendChild(fila);
            })
        }
        else {
            throw new Error('Error al obtener los ingredientes.');
        }
    } catch(err) {
        console.error(err);
    }
}

const nuevaFila = ingredienteData => {
    return `
    <td>${ingredienteData.nombre}</td>
    <td><img src="${URL}${ingredienteData.foto}" alt="Imagen de ${ingredienteData.nombre}"></td>
    <td><div class="muestra-color" style="background-color:${ingredienteData.color}"></div></td>
        <td>
            <a href="#editIngredienteModal" class="edit" data-bs-toggle="modal" data-bs-ingrediente-id=${ingredienteData.id}><i class="material-icons" data-bs-toggle="tooltip" title="Edit">&#xE254;</i></a>
            <a href="#deleteIngredienteModal" class="delete" data-bs-toggle="modal" data-bs-ingrediente-id=${ingredienteData.id}><i class="material-icons" data-bs-toggle="tooltip" title="Delete">&#xE872;</i></a>
        </td>
    `
}