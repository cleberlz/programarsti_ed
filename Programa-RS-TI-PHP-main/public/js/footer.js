function validarFormulario() {
    var nome = document.forms["newsletterForm"]["nome"].value;
    var email = document.forms["newsletterForm"]["email"].value;

    if (nome == "" || email == "") {
        document.getElementById("errorMessage").style.display = "block";
        return false;
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById("emailInvalidMessage").style.display = "block";
        return false;
    }

    return true;
}
