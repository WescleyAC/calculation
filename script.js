let button = document.getElementById("button1");

function calculate(){
let value1 = Number(document.getElementById("number1").value);
let value2 = Number(document.getElementById("number2").value);
let imprim = document.getElementById("value");


let result =  value2 / value1;
imprim.innerHTML = result.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});






}


button.addEventListener("click", calculate);
