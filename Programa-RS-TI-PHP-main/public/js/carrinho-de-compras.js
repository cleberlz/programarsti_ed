document.addEventListener('DOMContentLoaded', function() {
    const removeButtons = document.querySelectorAll('.item-remove button');
    const quantityInputs = document.querySelectorAll('.item-details input');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxClose = document.getElementById('lightbox-close');

    removeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const cartItem = this.closest('.cart-item');
            cartItem.remove();
            updateTotal();
        });
    });

    quantityInputs.forEach(input => {
        input.addEventListener('input', function() {
            updateTotal();
        });
    });

    function updateTotal() {
        let total = 0;
        const cartItems = document.querySelectorAll('.cart-item');
        
        cartItems.forEach(item => {
            const priceElement = item.querySelector('.item-details p:nth-child(4)');
            const quantityElement = item.querySelector('.item-details input');
            const price = parseFloat(priceElement.innerText.replace('Preço: R$ ', '').replace(',', '.'));
            const quantity = parseInt(quantityElement.value);
            total += price * quantity;
        });

        const totalElement = document.querySelector('.cart-total h2');
        totalElement.innerText = 'Total: R$ ' + total.toFixed(2).replace('.', ',');
    }

    document.querySelectorAll('.item-image img').forEach(img => {
        img.addEventListener('click', function() {
            const largeImgSrc = this.getAttribute('data-large');
            lightboxImg.src = largeImgSrc;
            lightbox.style.display = 'flex';
        });
    });

    lightboxClose.addEventListener('click', function() {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', function(event) {
        if (event.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });

    updateTotal();
});
