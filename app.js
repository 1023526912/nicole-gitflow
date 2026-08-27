const button = document.getElementById('btnClick');
const output = document.getElementById('output');
const form = document.getElementById('contactForm');
const formOutput = document.getElementById('formOutput');

button.addEventListener('click', () => {
    output.textContent = '🌸 Nicole está aprendiendo Git Flow paso a paso.';
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const favorite = document.getElementById('favorite').value;

    formOutput.textContent = `¡Gracias, ${name}! Tu color elegido fue ${favorite}. Correo registrado: ${email}.`;
    form.reset();
});
