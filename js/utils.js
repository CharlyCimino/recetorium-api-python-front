const getModalById = id => bootstrap.Modal.getOrCreateInstance(document.getElementById(id))

const ocultarModal = idModal => {
    getModalById(idModal).hide();
}
