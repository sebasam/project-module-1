const tarjeta = document.querySelector('#targeta')
    btnAbrirformulario = document.querySelector('#btn-abrir-formulario')
    formulario = document.querySelector('#formulario-tarjeta')
	numeroTarjeta = document.querySelector('#targeta .numero')
	nombreTarjeta = document.querySelector('#targeta .nombre')
	logoMarca = document.querySelector('#logo-marca')
	firma = document.querySelector('#targeta .firma p')
	mesExpiracion = document.querySelector('#targeta .mes')
	yearExpiracion = document.querySelector('#targeta .year')
	ccv = document.querySelector('#targeta .ccv');

//volteamos la trageta para mostrar el frente
const mostrarFrente = ()=>{
	if(targeta.classList.contains('active')){
		targeta.classList.remove('active');
	}
}

//rotacion de la targeta
tarjeta.addEventListener('click', () => {
    tarjeta.classList.toggle('active');
})
//boton de abrir formulario
btnAbrirformulario.addEventListener('click', () =>{
    btnAbrirformulario.classList.toggle('active');
    formulario.classList.toggle('active')
});
// select mes
    for(let i = 1; i <= 12; i++){
        let opcion = document.createElement('option');
        opcion.value = 1;
        opcion.innerText = i;
        formulario.selectMes.appendChild(opcion)
    }
// select año
    const yearActual = new Date().getFullYear();
    for(let i = yearActual; i <= yearActual + 10; i++){
        let opcion = document.createElement('option');
        opcion.value = 1;
        opcion.innerText = i;
        formulario.selectYear.appendChild(opcion)
    }

    //input numero de targeta 
    formulario.inputNumero.addEventListener('keyup', (e) => {
        let = valorInput = e.target.value;

    formulario.inputNumero.value = valorInput
	// Eliminamos espacios en blanco
	.replace(/\s/g, '')
	// Eliminar las letras
	.replace(/\D/g, '')
	// Ponemos espacio cada cuatro numeros
	.replace(/([0-9]{4})/g, '$1 ')
	// Elimina el ultimo espaciado
	.trim();

	numeroTarjeta.textContent = valorInput;
	if(valorInput == ''){
		numeroTarjeta.textContent = '### #### ###';

		logoMarca.innerHTML = ''
	}

	if(valorInput[0] == 4){
		logoMarca.innerHTML = ''
		const imagen = document.createElement('img');
		imagen.src = './membership-css/img/logos/visa.png'
		logoMarca.appendChild(imagen)
	}else if(valorInput[0] == 5){
		logoMarca.innerHTML = ''
		const imagen = document.createElement('img');
		imagen.src = './membership-css/img/logos/mastercard.png'
		logoMarca.appendChild(imagen)
	}


	//voltear la targeta
	mostrarFrente()
    })

	//input nombre  tarjeta
	formulario.inputNombre.addEventListener('keyup', (e) =>{
		let valorInput = e.target.value;

		formulario.inputNombre.value = valorInput.replace(/[0-9]/g, '');
		nombreTarjeta.textContent= valorInput;
		firma.textContent = valorInput;

		if(valorInput == ''){
			nombreTarjeta.textContent = 'Eren jeager'
		}
		mostrarFrente();
	})

	//select mes
	formulario.selectMes.addEventListener('change', (e) =>{
		mesExpiracion.textContent = e.target.value;
		mostrarFrente();
	}
)

//select año
formulario.selectYear.addEventListener('change', (e)=>{
	yearExpiracion.textContent = e.target.value;
	mostrarFrente();
})

// select ccv
formulario.inputCCV.addEventListener('keyup', () =>{
	if(!tarjeta.classList.contains('active')){
		tarjeta.classList.toggle('active');
	}
	formulario.inputCCV.value =  formulario.inputCCV.value
	.replace(/\s/g, '')
    .replace(/\D/, '');

	ccv.textContent = formulario.inputCCV.value;
})