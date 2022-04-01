function myFunction() {
	document.body.style.backgroundColor = "salmon";
}

const btn = document.getElementById('button-2');

btn.addEventListener('click', function onClick(event) {
	document.body.style.color = 'red';

});

function myFunctionTwo() {
	document.getElementById("replacement").style.fontFamily = "Arial,sans-serif";
}

function button4() {
	document.body.innerHTML
	= document.body.innerHTML
	.replace("Meow", "Greetings!");
}

function myFunctionThree() {
	alert("and Salutations!");
}


