document.addEventListener('DOMContentLoaded', function() {
    const zoomIcon = document.querySelector('.zoom-icon');
    const modal = document.getElementById('imageModal');
    const modalContent = document.querySelectorAll('.modal-content');
    const close = document.getElementsByClassName('close')[0];
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;

    function showImage(index) {
        modalContent.forEach(image => {
            image.classList.remove('active');
        });

        modalContent[index].classList.add('active');
    }

    zoomIcon.onclick = function() {
        modal.style.display = 'block';
        showImage(currentIndex);
    }

    close.onclick = function() {
        modal.style.display = 'none';
    }

    prevBtn.onclick = function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : modalContent.length - 1;
        showImage(currentIndex);
    }

    nextBtn.onclick = function() {
        currentIndex = (currentIndex < modalContent.length - 1) ? currentIndex + 1 : 0;
        showImage(currentIndex);
    }

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            modal.style.display = 'none';
        }
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowLeft') {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : modalContent.length - 1;
            showImage(currentIndex);
        } else if (event.key === 'ArrowRight') {
            currentIndex = (currentIndex < modalContent.length - 1) ? currentIndex + 1 : 0;
            showImage(currentIndex);
        }
    });

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});
