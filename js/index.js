function login() {
    const userType = document.getElementById("userType").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    const userPassword = "user123";
    const adminPassword = "admin123";
    const doctorPassword = "doctor123"; 

    if (userType === "user" && password === userPassword) {
        alert("Inicio de sesión satisfactorio como Usuario.");
        window.location.href = "user-profile.html";
    } else if (userType === "admin" && password === adminPassword) {
        alert("Inicio de Admin Satisfactorio.");
        window.location.href = "admin-dashboard.html";
    } else if (userType === "doctor" && password === doctorPassword) {
        alert("Inicio de sesión satisfactorio como Doctor.");
        window.location.href = "doctor-profile.html";
    } else {
        alert("Correo o contraseña incorrecta para " + userType);
    }
}