const firstNameInput = document.getElementById('fname');
const lastNameInput = document.getElementById('lname');
const emailInput = document.getElementById('email');
const ageInput = document.getElementById('age');
const contactNumberInput = document.getElementById('contactNumber');
const passwordInput = document.getElementById('password');

// Add event listeners for input changes
firstNameInput.addEventListener('input', validateFirstName);
lastNameInput.addEventListener('input', validateLastName);
emailInput.addEventListener('input', validateEmail);
ageInput.addEventListener('input', validateAge);
contactNumberInput.addEventListener('input', validateContactNumber);
passwordInput.addEventListener('input', validatePassword);

function validateFirstName() {
    const firstNameRegex = /^[a-zA-Z]{0,}$/;
    let firstNameError = document.getElementById('firstNameError');
    console.log(firstNameInput.value);
    if (firstNameInput.value == '') {
        firstNameInput.classList.add('invalid');
        firstNameInput.style.borderColor = 'red';
        firstNameError.style.color = 'red';
        firstNameError.textContent = 'Cant be blank';
        return;
    }
    if (!firstNameRegex.test(firstNameInput.value)) {
        firstNameInput.classList.add('invalid');
        firstNameInput.style.borderColor = 'red';
        firstNameError.style.color = 'red';
        firstNameError.textContent = 'Please enter a valid first name';
    } else {
        firstNameInput.style.borderColor = 'green';
        firstNameInput.classList.remove('invalid');
        firstNameError.textContent = 'Valid';
        firstNameError.style.color = 'green';
    }
}

function validateLastName() {
    const lastNameRegex = /^[a-zA-Z]{0,}$/;
    let lastNameError = document.getElementById('lastNameError');

    if (lastNameInput.value == '') {
        lastNameInput.classList.add('invalid');
        lastNameInput.style.borderColor = 'red';
        lastNameError.style.color = 'red';
        lastNameError.textContent = 'Cant be blank';
        return;
    }
    if (!lastNameRegex.test(lastNameInput.value)) {
        lastNameInput.classList.add('invalid');
        lastNameInput.style.borderColor = 'red';
        lastNameError.style.color = 'red';
        lastNameError.textContent = 'Please enter a valid first name';
    } else {
        lastNameInput.style.borderColor = 'green';
        lastNameInput.classList.remove('invalid');
        lastNameError.textContent = 'Valid';
        lastNameError.style.color = 'green';
    }
}

function validateEmail() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let emailError = document.getElementById('emailError');

    if (emailInput.value == '') {
        emailInput.style.borderColor = 'red';
        emailInput.classList.add('invalid');
        emailError.style.color = 'red';
        emailError.textContent = 'Cant be blank';
        return;
    }
    if (!emailRegex.test(emailInput.value)) {
        emailInput.classList.add('invalid');
        emailError.textContent = 'Please enter a valid email address';
    } else {
        emailInput.style.borderColor = 'green';
        emailInput.classList.remove('invalid');
        emailError.textContent = 'Valid';
        emailError.style.color = 'green';
    }
}

function validateAge() {
    const ageRegex = /^(1[89]|1[0-4]\d|[2-9]\d|150)$/gm;
    let ageError = document.getElementById('ageError');

    if (ageInput.value == '') {
        ageInput.classList.add('invalid');
        ageInput.style.borderColor = 'red';
        ageError.style.color = 'red';
        ageError.textContent = 'Cant be blank';
        return;
    }
    if (!ageRegex.test(ageInput.value)) {
        ageInput.classList.add('invalid');
        ageInput.style.borderColor = 'red';
        ageError.style.color = 'red';
        ageError.textContent = 'Age should be between 18 and 150';
    } else {
        ageInput.classList.remove('invalid');
        ageInput.style.borderColor = 'green';
        ageError.textContent = 'Valid';
        ageError.style.color = 'green';
    }
}

function validateContactNumber() {
    const contactNumberRegex = /^\d{11}$/;
    let contactNumberError = document.getElementById('contactError');

    if (contactNumberInput.value == '') {
        contactNumberInput.classList.add('invalid');
        contactNumberInput.style.borderColor = 'red';
        contactNumberError.style.color = 'red';
        contactNumberError.textContent = 'Cant be blank';
        return;
    }
    if (!contactNumberRegex.test(contactNumberInput.value)) {
        contactNumberInput.classList.add('invalid');
        contactNumberInput.style.borderColor = 'initial';
        contactNumberError.style.color = 'black';
        contactNumberError.textContent = 'Please enter 11 digits phone number';
    } else {
        contactNumberInput.classList.remove('invalid');
        contactNumberInput.style.borderColor = 'green';
        contactNumberError.textContent = 'Valid';
        contactNumberError.style.color = 'green';
    }
}

function validatePassword() {
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    let passwordError = document.getElementById('passwordError');

    if (passwordInput.value == '') {
        passwordInput.classList.add('invalid');
        passwordInput.style.borderColor = 'red';
        passwordError.style.color = 'red';
        passwordError.textContent = 'Cant be blank';
        return;
    }
    if (!passwordRegex.test(passwordInput.value)) {
        passwordInput.classList.add('invalid');
        passwordInput.style.borderColor = 'initial';
        passwordError.style.color = 'black';
        passwordError.textContent = 'Password must contain at least 8 characters including at least 1 uppercase letter, 1 lowercase letter, and 1 number';
    } else {
        passwordInput.classList.remove('invalid');
        passwordInput.style.borderColor = 'green';
        passwordError.textContent = 'Valid';
        passwordError.style.color = 'green';
    }
}

function validateReEnterPassword() {
    const reEnterPasswordInput = document.getElementById('reEnterPassword');
    let passwordAgainError = document.getElementById('passwordAgainError');

    if (reEnterPasswordInput.value == '') {
        console.log("1st if");
        reEnterPasswordInput.classList.add('invalid');
        reEnterPasswordInput.style.borderColor = 'red';
        passwordAgainError.style.color = 'red';
        passwordAgainError.textContent = 'Cant be blank';
        return;
    }
    if (passwordInput.value !== reEnterPasswordInput.value) {
        console.log("1st if");
        reEnterPasswordInput.classList.add('invalid');
        reEnterPasswordInput.style.borderColor = 'red';
        passwordAgainError.style.color = 'red';
        passwordAgainError.textContent = 'Passwords do not match';
    }
    else {
        console.log("else");
        reEnterPasswordInput.classList.remove('invalid');
        reEnterPasswordInput.style.borderColor = 'green';
        passwordAgainError.textContent = 'Passwords Matching';
        passwordAgainError.style.color = 'green';
    }
}



