function handleGetFormData() {
    let name = document.getElementById("name").value;
    let city = document.getElementById("city").value;
    let email = document.getElementById("email").value;
    let zipCode = document.getElementById("zip-code").value;
    let status = document.getElementById("status").checked;

    return {
        name,
        city,
        email,
        zipCode,
        status
    };
}

function isNumber(value) {
    return !isNaN(value)
}

function checkboxIsChecked() {
    return document.getElementById("status").checked;
}

function validateFormData(formData) {

    if (formData !== null && isNumber(formData.zipCode) && checkboxIsChecked()) {
        return true
    } else {
        return false
    }
}

let warningMessage = document.getElementById("warning")

function submit() {
    if (validateFormData(handleGetFormData())) {
        warningMessage.textContent = "";
    } else {
        warningMessage.textContent = "Periksa form anda sekali lagi";
    }
}

let formElement = document.getElementById("form")
formElement.addEventListener('submit',
    function (event) {
        event.preventDefault();
        submit();
    });
