document.addEventListener('DOMContentLoaded', function() {
    const productsContainer = document.querySelector('.products-container');
    const products = Array.from(productsContainer.children);
    const itemsPerPage = 12; 
    let currentPage = 1;
    const totalPages = Math.ceil(products.length / itemsPerPage);

    const prevButton = document.getElementById('prev-button');
    const nextButton = document.getElementById('next-button');
    const pageInfo = document.getElementById('page-info');

    function showPage(page) {
        products.forEach((product, index) => {
            product.style.display = (index >= (page - 1) * itemsPerPage && index < page * itemsPerPage) ? 'block' : 'none';
        });
        pageInfo.textContent = `Página ${page} de ${totalPages}`;
        prevButton.disabled = page === 1;
        nextButton.disabled = page === totalPages;
    }

    prevButton.addEventListener('click', function() {
        if (currentPage > 1) {
            currentPage--;
            showPage(currentPage);
        }
    });

    nextButton.addEventListener('click', function() {
        if (currentPage < totalPages) {
            currentPage++;
            showPage(currentPage);
        }
    });

    showPage(currentPage); 

    products.forEach((product) => {
        const quantityInput = product.querySelector('.quantity-input');
        const decreaseButton = product.querySelector('.decrease-button');
        const increaseButton = product.querySelector('.increase-button');
        const buyButton = product.querySelector('.buy-button');
        const messageDiv = product.querySelector('.message');
        
        let quantity = parseInt(quantityInput.value, 10);

        function updateQuantity() {
            quantityInput.value = quantity;
            decreaseButton.disabled = quantity <= 0;
        }

        decreaseButton.addEventListener('click', function() {
            if (quantity > 0) {
                quantity--;
                updateQuantity();
            }
        });

        increaseButton.addEventListener('click', function() {
            quantity++;
            updateQuantity();
        });

        buyButton.addEventListener('click', function() {
            messageDiv.textContent = 'Produto adicionado ao carrinho!';
            messageDiv.classList.add('show'); 
            setTimeout(() => {
                messageDiv.classList.remove('show');
                messageDiv.textContent = ''; 
            }, 3000); 
        });

        updateQuantity(); 
    });
});
