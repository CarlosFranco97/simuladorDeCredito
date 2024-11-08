import { expresionesRegulares }  from '../../../helpers/expresiones.js';

document.querySelector('#btnFormRegistro').addEventListener('click', () => {
    document.querySelector('#form-login').style.display = 'flex';
    document.querySelector('#form-registro').style.display = 'none';
});

document.querySelector('#btnFormLogin').addEventListener('click', () => {
    document.querySelector('#form-login').style.display = 'none';
    document.querySelector('#form-registro').style.display = 'flex';
})

let inputs = document.getElementsByTagName('input');

for(let index = 0; index < inputs.length; index++){
    inputs[index].addEventListener('keyup', (event) => validarFormulario(event));
}

function validarFormulario({target}) {
    switch(target.name){
        case 'registroNombre':
            if(expresionesRegulares.nombre.test(target.value)) {
                console.log('pasó la validacion');
                target.style.border = 'green 3px solid';
                document.querySelector('#parrafoValidaNombre').style.display = 'none';

            } else {
                console.log('El campo solo permite letras en mayusculas');
                target.style.border = 'red solid 3px';
                document.querySelector('#parrafoValidaNombre').style.display = 'flex';
            }
            break;
        default:
            break;
    }
}
