function validateForm() {

    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    if (name === "Sahyuri" && password === "aiko11") {
        //alert("usuario y contrasena validos")
        window.open('content.html');
    } else {
        alert("la contraseña no es correcta");
    }

};