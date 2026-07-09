// ===== Formulario de contacto =====
const form = document.getElementById('contact-form');
const successMessage = document.getElementById('form-success');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const data = new FormData(form);

  fetch(form.action, {
    method: 'POST',
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(function (response) {
    if (response.ok) {
      successMessage.style.display = 'block';
      form.reset();
    } else {
      alert('Hubo un problema al enviar el formulario. Intenta de nuevo.');
    }
  })
  .catch(function () {
    alert('Hubo un problema de conexión. Intenta de nuevo.');
  });
});

// ===== Animación de aparecer al hacer scroll =====
const revealElements = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
});

revealElements.forEach(function (element) {
  observer.observe(element);
});
