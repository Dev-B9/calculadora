
const dato1 = document.getElementById('dato1')
const dato2 = document.getElementById('dato2')
const signo = document.getElementById('signo')
const resultado = document.getElementById('resultado')



dato1.addEventListener('keyup', check)
dato1.addEventListener('keyup', characters)
dato2.addEventListener('keyup', characters)

function characters(params) {
  
}



dato2.addEventListener('keyup', check)
signo.addEventListener('keyup', check)

function check() {
  let n1 = Number(dato1.value)
  let n2 = Number(dato2.value)
  let simbolo = signo.value
  let signos = simbolo.toLowerCase()

  console.log(signos);
  if(n1 == 0  )  {
    dato1.value=""
  }else if(n2 == 0){
    dato2.value=""
  }
  else if(signos == "-" || (signos == "resta")){
    resta()
  }else if(signos == "+" || signos == "suma"){
    suma()
  }else if(signos == "*" || signos == "multiplicacion"){
    multiplicacion()
  }else if(signos == "/" || signos == "division"){
    division()
  }else if(signos == "%" || signos == "modulo"){
    modulo()
  }else if(n1 == "" && n2 =="" & signos ==""){
    resultado.textContent = "El resultado es:"
  }else{
   resultado.textContent = "¡Dato erroneo campo operacion!"
   
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
resultado.textContent = `el resultado es ${n1 * n2}`


}
// division
function division (){
  let n1 = Number(dato1.value)
let n2 = Number(dato2.value)
resultado.textContent = `el resultado es ${n1 / n2}`


}
// modulo
function modulo(){
  let n1 = Number(dato1.value)
  let n2 = Number(dato2.value)
  resultado.textContent = `el resultado es ${n1 / n2}`


}