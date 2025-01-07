document.addEventListener("DOMContentLoaded", function() {
    const promoText = document.getElementById("promo-text");
    const copyIcon = document.querySelector(".copy-icon");
    const checkIcon = document.querySelector(".check-icon");
    const copyMessage = document.getElementById("copy-message");
    const alertMessage = document.createElement('div');

    const texts = [
        "10% off Primeira Compra | Cupom: ELEGANCE10",
        "Frete Grátis acima de R$699"
    ];
    let currentIndex = 0;

    alertMessage.style.color = '#4CAF50';
    alertMessage.style.display = 'none';
    promoText.parentNode.insertBefore(alertMessage, promoText.nextSibling);

    function updateText() {
        alertMessage.textContent = "";
        alertMessage.style.display = 'none';

        promoText.textContent = texts[currentIndex];

        if (texts[currentIndex].includes("ELEGANCE10")) {
            copyIcon.style.display = "inline";
            checkIcon.style.display = "none";
        } else {
            copyIcon.style.display = "none";
        }

        currentIndex = (currentIndex + 1) % texts.length;
    }

    function copyPromoCode() {
        const promoTextContent = promoText.textContent;
        const promoCode = promoTextContent.split(": ")[1].trim();

        navigator.clipboard.writeText(promoCode).then(() => {
            checkIcon.style.display = "inline";
            copyMessage.textContent = "Copiado!";
            copyMessage.classList.add("coupon-copied-message");

            alertMessage.textContent = "Copiado!";
            alertMessage.style.display = 'block';

            copyIcon.style.display = "none";

            setTimeout(() => {
                checkIcon.style.display = "none";
                copyMessage.textContent = "";
                copyMessage.classList.remove("coupon-copied-message");
                copyIcon.style.display = "inline";
                alertMessage.style.display = 'none';
            }, 1000);
        }).catch(err => {
            console.error('Erro ao copiar o cupom:', err);
        });
    }

    setInterval(updateText, 3000);
    updateText();

    copyIcon.addEventListener("click", copyPromoCode);
});



//cupom acima do footer
function copyToClipboard(text) {
    navigator.clipboard.writeText(text)
        .then(function() {
            var checkIcon = document.getElementById('check-icon');
            checkIcon.style.display = 'inline-block';

            setTimeout(function() {
                checkIcon.style.display = 'none';
            }, 3000); 
        })
        .catch(function(err) {
            console.error('Erro ao copiar: ', err);
        });
}