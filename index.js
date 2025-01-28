const inputAge = document.getElementById('inputAge');
const ageButton = document.getElementById('submitButton');
const ageLable = document.getElementById('ageLable');



mySubmit.onclick = function() {
    age = inputAge.value;
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