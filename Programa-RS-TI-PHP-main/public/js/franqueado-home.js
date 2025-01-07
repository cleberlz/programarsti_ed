function changeFontSize(amount, textId) {
    const text = document.getElementById(textId);
    const currentSize = window.getComputedStyle(text, null).getPropertyValue('font-size');
    const newSize = parseFloat(currentSize) + amount;
    text.style.fontSize = newSize + 'px';
}
