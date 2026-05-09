let index = 0;
const slides = document.getElementById("slides");
const dots = document.querySelectorAll(".controls span");

function showSlide(i) {
    index = i;
    slides.style.transform = `translateX(-${i * 100}%)`;

    dots.forEach(dot => dot.classList.remove("active"));
    dots[i].classList.add("active");
}

function goToSlide(i) {
    showSlide(i);
}

function autoSlide() {
    index++;
    if (index > 2) index = 0;
    showSlide(index);
}

setInterval(autoSlide, 4000);