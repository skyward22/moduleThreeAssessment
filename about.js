// console.log("hello world");

// let sumbit = document.querySelector('submit')

function handleSubmit(evt) {
	evt.preventDefault();
	alert(`Submit Successfull!`);
}

// sumbit.addEventListener("click", handleSubmit)
let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);






function duckResponse(evt){
	evt.preventDefault();
	alert("You're awesome!")
};

let duck = document.querySelector('img');

duck.addEventListener("mouseover", duckResponse)







