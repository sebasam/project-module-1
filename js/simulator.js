// amount apunta al input de tipo select en el cuál el ususario escogerá la cantidad a invertir
const amount = document.getElementById('inputNumber')
// variable que toma el boton con el valor de baja
const btnDown = document.getElementById('btn-down')
// boton con el valor de sube
const btnUp = document.getElementById('btn-up')
//variable con el div que arrojará si el dolar subió o bajó y si el usuario ganó o perdio al adivinar el comportamiento der la divisa
const dollarZone = document.getElementById('dollar-zone')
// mostrará un mensaje con el valor actual y el valor anterior del dolar
let dollarAmount = document.querySelector('.new-text')
// cantidad con la que el usuario podrá invertir en el simulador, se visualiza en la parte superior izquierda
let customerAmount = document.getElementById('customer-amount')
// valor al cual se le restará la cantidad con la que invierte el usuario, se sumrá o restará segun gane o pierda
let customerPoints = 5000
// funcion que tomará un valor aleatorio del dólar commo si estuviese oscilando en el mercado
const dollarValue = () => {
    let min = 3900
    let max = 4095
    // Tomará un valor aleatorio entre el min y el max
    let dollarRandom = Math.random() * (max - min) + min
    // fijará el valor para que muestre no más de 2 decimales
    let fixedDollar = dollarRandom.toFixed(2)
    return fixedDollar
}
// el primer valor del dolar será el que visualizemos en la pantalla al inicio , se guarda en la variable por que se va a usar en varias partes de los condicionales
let myDollarValue = dollarValue()
// Esta funcion toma el valor de la variable myDollarValue y agrega el contenido al div llamado con la variable dollarAmount
const addContent = () => {
    dollarAmount.innerHTML = `El valor actual del dólar es de: ${myDollarValue}`
}
// se hace la llamada a la funcion porque es necesario que le usuario conozca el valor actual del dolar, el valor es aleatorio
addContent()
// Esta funcion se activará en la seccion de eventos cuando se haga click en el boton rojo, se evaluará los 3 casos del option, el boton hace referencia a que si el dolar baja el usuario gano el juego, recibirá la mitad de lo apostado y esa mitad se le sumará a la zona customerAmount y customerPoints, en el caso de que pierda perderá el doble de lo apostado más la diferencia de los dos valores del dólar, como un juego de trading si te equivocas puedes perder más
const pushBtnDown = () => {
    if(amount.value == '100'){
        let newDollar = dollarValue()
        if(newDollar < myDollarValue){
            let points = 50
            dollarZone.classList.remove('d-none')
            dollarZone.innerHTML = `<div class="col bg-success rounded-3">
                <h3>El dolar Bajó!! y su valor ahora es de ${newDollar}</h3>
                <h4>Ganaste ${points} USD</h4>
            </div>`
            dollarAmount.innerHTML = `El valor anterior era de ${myDollarValue} y ahora el valor actual del dólar es de: ${newDollar}`
            myDollarValue = newDollar
            customerPoints += points
            customerAmount.innerHTML = `${customerPoints.toFixed(0)}`
        }else{
            let points = (myDollarValue - newDollar) + 200
            let fixedPoints = points.toFixed(0)
            dollarZone.classList.remove('d-none')
            dollarZone.innerHTML = `<div class="col bg-danger rounded-3">
                <h3>El dolar Subió!! y su valor ahora es de ${newDollar}</h3>
                <h4>Perdiste ${fixedPoints} USD</h4>
            </div>`
            dollarAmount.innerHTML = `El valor anterior era de ${myDollarValue} y ahora el valor actual del dólar es de: ${newDollar}`
            myDollarValue = newDollar
            customerPoints -= points            
            if(customerPoints <= 0){
                alert('Te quedaste sin puntos, el simulador se reiniciará. Si te gustó puedes adquirir nuestra membresía')
                window.location.reload()
            }else{
                customerAmount.innerHTML = `${customerPoints.toFixed(0)}`
            }
        }
    }else if(amount.value == '500'){
        let newDollar = dollarValue()
        if(newDollar < myDollarValue){
            let points = 250
            dollarZone.classList.remove('d-none')
            dollarZone.innerHTML = `<div class="col bg-success rounded-3">
                <h3>El dolar Bajó!! y su valor ahora es de ${newDollar}</h3>
                <h4>Ganaste ${points} USD</h4>
            </div>`
            dollarAmount.innerHTML = `El valor anterior era de ${myDollarValue} y ahora el valor actual del dólar es de: ${newDollar}`
            myDollarValue = newDollar
            customerPoints += points
            customerAmount.innerHTML = `${customerPoints.toFixed(0)}`
        }else{
            let points = (myDollarValue - newDollar) + 500
            let fixedPoints = points.toFixed(0)
            dollarZone.classList.remove('d-none')
            dollarZone.innerHTML = `<div class="col bg-danger rounded-3">
                <h3>El dolar Subió!! y su valor ahora es de ${newDollar}</h3>
                <h4>Perdiste ${fixedPoints} USD</h4>
            </div>`
            dollarAmount.innerHTML = `El valor anterior era de ${myDollarValue} y ahora el valor actual del dólar es de: ${newDollar}`
            myDollarValue = newDollar
            customerPoints -= points            
            if(customerPoints <= 0){
                alert('Te quedaste sin puntos, el simulador se reiniciará. Si te gustó puedes adquirir nuestra membresía')
                window.location.reload()
            }else{
                customerAmount.innerHTML = `${customerPoints.toFixed(0)}`
            }
        }
    }else if(amount.value == '1000'){
        let newDollar = dollarValue()
        if(newDollar < myDollarValue){
            let points = 500
            dollarZone.classList.remove('d-none')
            dollarZone.innerHTML = `<div class="col bg-success rounded-3">
                <h3>El dolar Bajó!! y su valor ahora es de ${newDollar}</h3>
                <h4>Ganaste ${points} USD</h4>
            </div>`
            dollarAmount.innerHTML = `El valor anterior era de ${myDollarValue} y ahora el valor actual del dólar es de: ${newDollar}`
            myDollarValue = newDollar
            customerPoints += points
            customerAmount.innerHTML = `${customerPoints.toFixed(0)}`
        }else{
            let points = (myDollarValue - newDollar) + 1000
            let fixedPoints = points.toFixed(0)
            dollarZone.classList.remove('d-none')
            dollarZone.innerHTML = `<div class="col bg-danger rounded-3">
                <h3>El dolar Subió!! y su valor ahora es de ${newDollar}</h3>
                <h4>Perdiste ${fixedPoints} USD</h4>
            </div>`
            dollarAmount.innerHTML = `El valor anterior era de ${myDollarValue} y ahora el valor actual del dólar es de: ${newDollar}`
            myDollarValue = newDollar
            customerPoints -= points            
            if(customerPoints <= 0){
                alert('Te quedaste sin puntos, el simulador se reiniciará. Si te gustó puedes adquirir nuestra membresía')
                window.location.reload()
            }else{
                customerAmount.innerHTML = `${customerPoints.toFixed(0)}`
            }
        }
    }else{
        alert('Selecciona una opción válida para invertir')
    }
}
// al igual que la funcion de arriba, este evalua si el dolar sube y se comporta de manera contraria pero suma y resta puntos de igual manera, en ambos casos el juego se acaba cuando el usuario no tenga más créditos en USD para invertir
const pushBtnUp = () => {
    if(amount.value == '100'){
        let newDollar = dollarValue()
        if(newDollar > myDollarValue){
            let points = 50
            dollarZone.classList.remove('d-none')
            dollarZone.innerHTML = `<div class="col bg-success rounded-3">
                <h3>El dolar Subió!! y su valor ahora es de ${newDollar}</h3>
                <h4>Ganaste ${points} USD</h4>
            </div>`
            dollarAmount.innerHTML = `El valor anterior era de ${myDollarValue} y ahora el valor actual del dólar es de: ${newDollar}`
            myDollarValue = newDollar
            customerPoints += points
            customerAmount.innerHTML = `${customerPoints.toFixed(0)}`
        }else{
            let points = (newDollar - myDollarValue) + 200
            let fixedPoints = points.toFixed(0)
            dollarZone.classList.remove('d-none')
            dollarZone.innerHTML = `<div class="col bg-danger rounded-3">
                <h3>El dolar Bajó!! y su valor ahora es de ${newDollar}</h3>
                <h4>Perdiste ${fixedPoints} USD</h4>
            </div>`
            dollarAmount.innerHTML = `El valor anterior era de ${myDollarValue} y ahora el valor actual del dólar es de: ${newDollar}`
            myDollarValue = newDollar
            customerPoints -= points            
            if(customerPoints <= 0){
                alert('Te quedaste sin puntos, el simulador se reiniciará. Si te gustó puedes adquirir nuestra membresía')
                window.location.reload()
            }else{
                customerAmount.innerHTML = `${customerPoints.toFixed(0)}`
            }
        }
    }else if(amount.value == '500'){
        let newDollar = dollarValue()
        if(newDollar > myDollarValue){
            let points = 250
            dollarZone.classList.remove('d-none')
            dollarZone.innerHTML = `<div class="col bg-success rounded-3">
                <h3>El dolar Subió!! y su valor ahora es de ${newDollar}</h3>
                <h4>Ganaste ${points} USD</h4>
            </div>`
            dollarAmount.innerHTML = `El valor anterior era de ${myDollarValue} y ahora el valor actual del dólar es de: ${newDollar}`
            myDollarValue = newDollar
            customerPoints += points
            customerAmount.innerHTML = `${customerPoints.toFixed(0)}`
        }else{
            let points = (newDollar - myDollarValue) + 500
            let fixedPoints = points.toFixed(0)
            dollarZone.classList.remove('d-none')
            dollarZone.innerHTML = `<div class="col bg-danger rounded-3">
                <h3>El dolar Bajó!! y su valor ahora es de ${newDollar}</h3>
                <h4>Perdiste ${fixedPoints} USD</h4>
            </div>`
            dollarAmount.innerHTML = `El valor anterior era de ${myDollarValue} y ahora el valor actual del dólar es de: ${newDollar}`
            myDollarValue = newDollar
            customerPoints -= points            
            if(customerPoints <= 0){
                alert('Te quedaste sin puntos, el simulador se reiniciará. Si te gustó puedes adquirir nuestra membresía')
                window.location.reload()
            }else{
                customerAmount.innerHTML = `${customerPoints.toFixed(0)}`
            }
        }
    }else if(amount.value == '1000'){
        let newDollar = dollarValue()
        if(newDollar > myDollarValue){
            let points = 500
            dollarZone.classList.remove('d-none')
            dollarZone.innerHTML = `<div class="col bg-success rounded-3">
                <h3>El dolar Subió!! y su valor ahora es de ${newDollar}</h3>
                <h4>Ganaste ${points} USD</h4>
            </div>`
            dollarAmount.innerHTML = `El valor anterior era de ${myDollarValue} y ahora el valor actual del dólar es de: ${newDollar}`
            myDollarValue = newDollar
            customerPoints += points
            customerAmount.innerHTML = `${customerPoints.toFixed(0)}`
        }else{
            let points = (newDollar - myDollarValue) + 1000
            let fixedPoints = points.toFixed(0)
            dollarZone.classList.remove('d-none')
            dollarZone.innerHTML = `<div class="col bg-danger rounded-3">
                <h3>El dolar Bajó!! y su valor ahora es de ${newDollar}</h3>
                <h4>Perdiste ${fixedPoints} USD</h4>
            </div>`
            dollarAmount.innerHTML = `El valor anterior era de ${myDollarValue} y ahora el valor actual del dólar es de: ${newDollar}`
            myDollarValue = newDollar
            customerPoints -= points            
            if(customerPoints <= 0){
                alert('Te quedaste sin puntos, el simulador se reiniciará. Si te gustó puedes adquirir nuestra membresía')
                window.location.reload()
            }else{
                customerAmount.innerHTML = `${customerPoints.toFixed(0)}`
            }
        }
    }else{
        alert('Selecciona una opción válida para invertir')
    }
}
// eventos que activan los botones y ejecutan las dos funciones anteriores para dar inicio al programa
btnDown.onclick = function(){
    pushBtnDown()
}
btnUp.onclick = function(){
    pushBtnUp()
}