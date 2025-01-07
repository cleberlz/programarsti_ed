document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.custom-slider-item');
    const itemsPerPage = 4;
    let currentIndex = 0;

    function updateSlider() {
        const totalItems = items.length;
        items.forEach((item, index) => {
            item.style.display = (index >= currentIndex && index < currentIndex + itemsPerPage) ? 'block' : 'none';
        });
        
        updateNavigationButtons();
    }

    function goToNext(event) {
        event.preventDefault(); 
        const totalItems = items.length;
        if (currentIndex + itemsPerPage < totalItems) {
            currentIndex += itemsPerPage;
        } else {
            currentIndex = totalItems - itemsPerPage; 
        }
        updateSlider();
    }

    function goToPrev(event) {
        event.preventDefault(); 
        if (currentIndex - itemsPerPage >= 0) {
            currentIndex -= itemsPerPage;
        } else {
            currentIndex = 0; 
        }
        updateSlider();
    }

    function updateNavigationButtons() {
        const totalItems = items.length;
        const prevButton = document.querySelector('.custom-slider-prev');
        const nextButton = document.querySelector('.custom-slider-next');

        if (prevButton) {
            prevButton.style.display = (currentIndex > 0) ? 'block' : 'none';
        }
        if (nextButton) {
            nextButton.style.display = (currentIndex + itemsPerPage < totalItems) ? 'block' : 'none';
        }
    }

    // Adicionando event listeners para os botões de navegação
    const prevButton = document.querySelector('.custom-slider-prev');
    const nextButton = document.querySelector('.custom-slider-next');

    if (prevButton) {
        prevButton.addEventListener('click', goToPrev);
    }
    if (nextButton) {
        nextButton.addEventListener('click', goToNext);
    }

    // Inicializa o slider ao carregar a página
    updateSlider();
});
