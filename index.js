const myText = document.getElementById('inputAge');
const mySubmit = document.getElementById('submitButton');
const myResult = document.getElementById('result');

let age;

mySubmit.onclick = function() {
    age = myText.value;
    age = Number(age);

    if (age > 60) {
        myResult.textContent = "You are a senior citizen.";
    } else if (age >= 18 && age <= 60) {
        myResult.textContent = "You are an adult.";
    } else if (age == 17) {
        myResult.textContent = "You are almost an adult.";
    } else if (age < 17 && age >= 13) {
        myResult.textContent = "You are a teenager.";
    } else {
        myResult.textContent = "You are a child.";
    }
};