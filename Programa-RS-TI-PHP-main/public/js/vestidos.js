document.addEventListener('DOMContentLoaded', function() {
    const quantityInput = document.getElementById('quantity');
    const decreaseButton = document.getElementById('decrease-button');
    const increaseButton = document.getElementById('increase-button');
    
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

    updateQuantity(); 
});