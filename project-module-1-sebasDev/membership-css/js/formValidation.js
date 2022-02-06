const form1 = document.getElementById('form1')
const name1 = document.getElementById('name').value 
console.log(name1)
const lastName = document.getElementById('apellido').value
const idCard = document.getElementById('documento').value
const date = document.getElementById('nacimiento').value
const email = document.getElementById('email').value
const password = document.getElementById('password').value
const btnData = document.getElementById('btn-data')
const btnReset = document.getElementById('btn-reset')

const sendData = () =>{
    if (name1 == 'eren') {
        alert('funciona')
    }
}

const resetData = ()=>{
    window.location.reload()
}

form1.onsubmit = function(e) {
    e.preventDefault()
    sendData()
    alert(name1)
}

resetData.onclick = function(){
    resetData()
}
