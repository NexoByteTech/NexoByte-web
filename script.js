const form = document.getElementById('contact-form');
const successMessage = document.getElementById('form-success');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    successMessage.style.display = 'block';
    form.reset();

});    

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
