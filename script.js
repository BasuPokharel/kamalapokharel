function nagu(){
 	document.getElementById("jadu").innerHTML=Date();

 }


function user(){
document.getElementById("baby2").innerHTML=("<h1>THE NAME OF THIS MAKER IS NIKESH POKHAREL</h1>");
}

alert("Warning!! Your all saved progress will be lost");

function calculalte(){
let r=document.getElementById('r').value;
let a=r*r*3.14;
document.getElementById('result').innerHTML = a;
}

function SII(){
let principal=document.getElementById('p').value;
let time=document.getElementById('t').value;
let rate=document.getElementById("d").value;
let si=principal*time*rate/100;
document.getElementById("show").innerHTML= si;
}


function rndm(){
let i=document.getElementById("beb").value;
let j=(Math.random()*i).toFixed(0);
document.getElementById("nupe").innerHTML=j;
}

function cal(){
	let q=document.getElementById("num").value;
	let c=1.60*q;
	document.getElementById("store").innerHTML = c;
}

function calc(){
	let q1=document.getElementById("num1").value;
	let c1=129.81*q1;
	document.getElementById("store1").innerHTML = c1;
}
