let formData = { email: "", message: "" };


const form = document.querySelector('.feedback-form');
const emailInput = form.elements['email'];
const messageInput = form.elements['message'];


document.addEventListener('DOMContentLoaded', () => {
    const savedData = localStorage.getItem('feedback-form-state');
    if (savedData) {
        formData = JSON.parse(savedData);
        emailInput.value = formData.email || '';
        messageInput.value = formData.message || '';
    }
});

form.addEventListener('input', (event) => {
    formData[event.target.name] = event.target.value.trim();
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!formData.email || !formData.message) {
        alert('Fill please all fields');
        return;
    }

    console.log('Submitted form data:', formData);

    
    form.reset();
    localStorage.removeItem('feedback-form-state');
    formData = { email: "", message: "" };
});
