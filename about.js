console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	message.textContent = `Submit Successfull!`;
}

let duck = document.querySelector('img');

function duckResponse(event){
	alert("You're awesome!")
};

duck.addEventListener("mouseover", duckResponse)


let form = document.querySelector('form#contact');

form.document.addEventListener('alert', handleSubmit);
