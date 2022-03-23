let button = document.getElementById("button1");

function calculate(){
let valuen1 = Number(document.getElementById("number1").value);
let valuePorc = Number(document.getElementById("porcent").value);
let valuen2 = Number(document.getElementById("number2").value);
let imprim = document.getElementById("value");
let imprim2 = document.getElementById("value2");
let imprim3 = document.getElementById("value3");


let result =  valuen2 / valuen1;
imprim.innerHTML = result.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

let quantM = valuen1 * valuePorc / 100 + valuen1; 
imprim2.innerHTML = quantM * 1000 + " " + "Milhas";



let valueMp = valuen2 / quantM; 
imprim3.innerHTML = valueMp.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});





}


button.addEventListener("click", calculate);
