let slideIndex = 0;
showSlides(slideIndex);

function changeSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("carousel-item");
    if (n >= slides.length - 2) { slideIndex = slides.length - 3; }
    if (n < 0) { slideIndex = 0; }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = slideIndex; i < slideIndex + 3; i++) {
        if (slides[i]) {
            slides[i].style.display = "block";
        }
    }
}
