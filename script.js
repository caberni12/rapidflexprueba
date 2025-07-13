const scriptURL_Empresa = 'https://script.google.com/macros/s/AKfycbzhPW0E0oZsEZcRZ3y1gKTjcu47ROOTS12PkiGdMka2IilKsvNGMdzO4kGbdEy7tL-GNw/exec';
const scriptURL_Repartidor = 'https://script.google.com/macros/s/AKfycbz8dexSm8sq_UF6Z4D9EqkCFKJLVnUqAseqgKdV7nNMEOZUzPSddhq5c7wqDx2E5AP--g/exec'; // Reemplaza esta URL

function hideSplash() {
document.getElementById('splash').classList.add('hidden');
}

function openModal(modalId) {
document.getElementById(modalId).style.display = 'flex';
}

function closeModal(modalId) {
document.getElementById(modalId).style.display = 'none';
}

function handleFormSubmit(formId, loaderId, modalId, scriptURL) {
document.getElementById(formId).addEventListener('submit', e => {
 e.preventDefault();
 const loader = document.getElementById(loaderId);
 loader.style.display = 'block';

 setTimeout(() => {
     fetch(scriptURL, {
         method: 'POST',
         body: new FormData(e.target)
     })
     .then(response => {
         if (response.ok) {
             alert('Datos Enviado Correctame.');
             e.target.reset();
             closeModal(modalId);
         } else {
             alert('Error al enviar el formulario.');
         }
     })
     .catch(error => alert('Error: ' + error.message))
     .finally(() => {
         loader.style.display = 'none';
     });
 }, 1500);
});
}

// Llamadas separadas para cada formulario
handleFormSubmit('empresaForm', 'loaderEmpresa', 'modalEmpresa', scriptURL_Empresa);
handleFormSubmit('repartidorForm', 'loaderRepartidor', 'modalRepartidor', scriptURL_Repartidor);
