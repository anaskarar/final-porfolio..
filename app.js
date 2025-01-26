// Add interactivity for the "Learn More" button
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        alert("Learn more clicked!");
    });
});
