const inputNombre = document.getElementById("inputNombreIngredienteAdd");
const inputFoto = document.getElementById("inputFotoIngredienteAdd");
const inputColor = document.getElementById("inputColorIngredienteAdd");

const agregarIngrediente = async (evt) => {
    evt.preventDefault();
    try {
        const formData = new FormData();
        formData.append("nombre", inputNombre.value);
        formData.append("foto", inputFoto.files[0]);
        formData.append("color", inputColor.value);
        const opcionesFetch = {
            method: 'POST',
            body: formData
        }
        const resp = await fetch(`${URL}/api/ingredientes`, opcionesFetch);
        if (resp.ok) {
            alert("Ingrediente agregado exitosamente");
            inputNombre.value = "";
            inputFoto.value = "";
            inputColor.value = "#000000";
            ocultarModal('addIngredienteModal');
            obtenerTodosLosIngredientes();
        }
        else {
            throw new Error('Error al agregar el ingrediente.');
        }
    } catch(err) {
        console.error(err);
    }
}

