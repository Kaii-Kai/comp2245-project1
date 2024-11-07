/* Add your JavaScript to this file */

const form = document.querySelector("form");
const emailInput = document.getElementById("email");


const validateInput = document.querySelector (".message") {
	if (!emailInput.value) {
		validateInput.textContent = "Please enter a valid email address.";
	}
	else {
		validateInput.textContent = "Thank you! ${emailInput} Your email address has been added to our mailing list!";
	}
};

form.addEventListener ("submit", (e) => {
	e.preventDefault();
	validateInput ();
});

emailInput.addEventListener ("input", () => {
	validateInput ();
});