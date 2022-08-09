const dato1 = document.getElementById('dato1')
const dato2 = document.getElementById('dato2')
const signo = document.getElementById('signo')
const resultado = document.getElementById('resultado')



dato1.addEventListener('keyup', check)
dato2.addEventListener('keyup', check)
signo.addEventListener('keyup', check)

function check() {
  let n1 = Number(dato1.value)
  let n2 = Number(dato2.value)
  let simbolo = signo.value
  let signos = simbolo.toLowerCase()

 

 if(signos == "-" || (signos == "resta")){
    resta()
  }else if(signos == "+" || signos == "sumar"){
    suma()
  }else if(signos == "*" || signos == "multiplicacion"){
    multiplicacion()
  }else if(signos == "/" || signos == "division"){
    division()
  }else if(signos == "%" || signos == "modulo"){
    modulo()
  }else if(n1 == "" && n2 =="" && signos ==""){
    resultado.textContent = "Campos Vacios"
  }else{
    resultado.textContent = "Revisar campos"

  }
}
  

// suma 
function suma (){

let n1 = Number(dato1.value)
let n2 = Number(dato2.value)

resultado.textContent = `el resultado es ${n1 + n2}`


}
// resta
function resta (){
  console.log('resta');
  let n1 = Number(dato1.value)
  let n2 = Number(dato2.value)
resultado.textContent = `el resultado es ${n1 - n2}`


 
}
// multiplicacion
function multiplicacion(){
let n1 = Number(dato1.value)
let n2 = Number(dato2.value)
resultado.textContent = `el resultado es ${(n1 / n2).toFixed(1)}`


}
// division
function division (){
  let n1 = Number(dato1.value)
let n2 = Number(dato2.value)
resultado.textContent = `el resultado es ${(n1 / n2).toFixed(1)}`


}
// modulo
function modulo(){
  let n1 = Number(dato1.value)
  let n2 = Number(dato2.value)
  resultado.textContent = `el resultado es ${(n1 / n2).toFixed(1)}`


}
