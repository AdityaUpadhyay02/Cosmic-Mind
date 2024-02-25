const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(slideIndex) {
    slides.forEach((slide, index) => {
        if (index === slideIndex) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

function nextSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }
    showSlide(currentSlide);
}

document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

showSlide(currentSlide);

const centerButtons = document.querySelectorAll('.center-button');

centerButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // You can add actions specific to each slide here
        alert(`Action for Slide ${index + 1}`);
    });
});
document.getElementById("myButton").addEventListener("click", function () {
    alert("Button Clicked!");
});
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("appointment-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // You can add your form submission logic here.
        // For this example, we'll just show a confirmation message.
        alert("Appointment submitted successfully!");
        form.reset();
    });
});

function timeout(){
    alert("Just to make account");
}
function myfunction(){
    window.history.back();
}