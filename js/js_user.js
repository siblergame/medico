let editIndex = -1; // Variable para almacenar el índice de la fila que se edita
let rowToDelete = null; // Variable para almacenar la fila que se va a eliminar
let rowToEdit = null; // Variable para almacenar la fila que se va a modificar

// Variables para almacenar datos de la cita en la ventana emergente
let name, consultorio, servicio, appointmentDate, appointmentTime;

// Función para mostrar la ventana modal de confirmación para agregar
function showAddConfirmation() {
    name = document.getElementById("name").value;
    consultorio = document.getElementById("consultorio").value;
    servicio = document.getElementById("servicio").value;
    appointmentDate = document.getElementById("appointmentDate").value;
    appointmentTime = document.getElementById("appointmentTime").value;

    if (name && consultorio && servicio && appointmentDate && appointmentTime) {
        // Mostrar los datos en la ventana modal
        document.getElementById("modalBody").innerHTML = `
            <strong>Nombre:</strong> ${name}<br>
            <strong>Consultorio:</strong> ${consultorio}<br>
            <strong>Servicio:</strong> ${servicio}<br>
            <strong>Fecha:</strong> ${appointmentDate}<br>
            <strong>Hora:</strong> ${appointmentTime}
        `;
        document.getElementById('addConfirmationModal').style.display = 'flex'; // Mostrar la ventana modal
    } else {
        alert("Por favor, complete todos los campos.");
    }
}

// Función para mostrar la ventana modal de notificación
function showNotification() {
    document.getElementById("notificationModal").style.display = 'flex'; // Mostrar la ventana modal de notificación
}

// Función para confirmar la notificación
function confirmNotification() {
    closeNotificationModal(); // Cerrar la ventana de notificación
    showAddConfirmation(); // Mostrar la ventana de confirmación de cita
}

// Función para cerrar la ventana modal de notificación
function closeNotificationModal() {
    document.getElementById("notificationModal").style.display = 'none'; // Ocultar la ventana modal de notificación
}

// Función para agregar la cita confirmada
function addConfirmedAppointment() {
    const table = document.getElementById("appointmentTable");
    const newRow = table.insertRow();
    newRow.innerHTML = `
        <td>${name}</td>
        <td>${consultorio}</td>
        <td>${servicio}</td>
        <td>${appointmentDate}</td>
        <td>${appointmentTime}</td>
        <td class="actions">
            <button onclick="showEditConfirmation(this)">✏️</button>
            <button onclick="showDeleteConfirmation(this)">🗑️</button>
        </td>
    `;
    clearForm(); // Limpiar el formulario después de agregar
    closeAddConfirmationModal(); // Cerrar la ventana modal de confirmación
    document.getElementById("message").style.display = "block";
    document.getElementById("message").innerText = "Cita agregada correctamente.";
}

// Función para cerrar la ventana modal de agregar
function closeAddConfirmationModal() {
    document.getElementById('addConfirmationModal').style.display = 'none'; // Ocultar la ventana modal
}

// Función para limpiar los campos del formulario
function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("consultorio").value = "";
    document.getElementById("servicio").value = "";
    document.getElementById("appointmentDate").value = "";
    document.getElementById("appointmentTime").value = "";
}


