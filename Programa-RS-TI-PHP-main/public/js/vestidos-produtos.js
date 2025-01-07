let currentIndex = 0;
const images = [
    "assets/vestidos/vestido-1/1.jpg",
    "assets/vestidos/vestido-1/2.jpg"
];

function openModal(index) {
    document.getElementById('imageModal').style.display = 'block';
    showImage(index);
}

document.getElementById('closeModal').onclick = function() {
    document.getElementById('imageModal').style.display = 'none';
};

document.getElementById('prev').onclick = function() {
    changeImage(-1);
};

document.getElementById('next').onclick = function() {
    changeImage(1);
};

function showImage(index) {
    const img = document.getElementById('imgModal');
    img.src = images[index];
    currentIndex = index; 
}

function changeImage(n) {
    currentIndex += n;
    if (currentIndex >= images.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = images.length - 1;
    showImage(currentIndex);
}

window.onclick = function(event) {
    if (event.target == document.getElementById('imageModal')) {
        document.getElementById('imageModal').style.display = 'none';
    }
};
