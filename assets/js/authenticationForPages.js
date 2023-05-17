const password = "1998";

document.getElementById("cartas-link").addEventListener("click", function(event) {
  event.preventDefault();
  document.getElementById("password-modal").style.display = "block";
});

document.getElementById("password-form").addEventListener("submit", function(event) {
  event.preventDefault();
  const inputPassword = document.getElementById("password-input").value;
  if (inputPassword === password) {
    window.location.href = "./cartasDeDomingo.html";
  } else {
    alert("Contraseña incorrecta");
  }
});

const modal = document.getElementById("password-modal");
const closeButton = document.querySelector(".close-button");

// Agregar evento de clic al botón de cerrar
closeButton.addEventListener("click", function() {
  // Ocultar el modal
  modal.style.display = "none";
});


  