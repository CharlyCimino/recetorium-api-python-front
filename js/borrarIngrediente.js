const inputIDIngredienteABorrar = document.getElementById("inputIDIngredienteABorrar")

document.getElementById("deleteIngredienteModal").addEventListener('show.bs.modal', evt => {
    const ingredienteId = evt.relatedTarget.getAttribute('data-bs-ingrediente-id');
    inputIDIngredienteABorrar.value = ingredienteId;
});

const borrarIngrediente = async (evt) => {
    evt.preventDefault();
    try {
        const id = inputIDIngredienteABorrar.value;
        const opcionesFetch = {
            method: 'DELETE'
        }
        const resp = await fetch(`${URL}/api/ingredientes/${id}`, opcionesFetch);
        if (resp.ok) {
            alert("Ingrediente borrado exitosamente");
            ocultarModal('deleteIngredienteModal');
            await obtenerTodosLosIngredientes();
        }
        else {
            throw new Error('Error al borrar el ingrediente.');
        }
    } catch(err) {
        console.error(err);
    }
}