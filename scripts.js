
document.addEventListener('DOMContentLoaded', function () {
    const box = document.getElementById('box');
    const hoverBox = document.getElementById('hoverBox');
    const dynamicText = document.getElementById('dynamicText');
    const borderBox = document.getElementById('borderBox');

    function changeColor() {
        const colors = ['red', 'orange', 'green', 'yellow', 'purple'];
        const currentColor = box.style.backgroundColor;
        let newColor = colors[Math.floor(Math.random() * colors.length)];

        while(newColor === currentColor) {
            newColor =colors[Math.floor(Math.random() * colors.length)];
        }
        box.style.backgroundColor = newColor;
    }

    box.addEventListener('click', changeColor);

    hoverBox.addEventListener('mouseover', function(){
        hoverBox.style.backgroundColor = 'lightgreen';
    });
    
    hoverBox.addEventListener('mouseout', function() {
        hoverBox.style.backgroundColor = 'lightcoral';
    });

    function changeText() {
        const message = ['The text has changed', 'Look at me now', 'I am different'];
        dynamicText.textContent = message[Math.floor(Math.random() * message.length)];
    }

    function changeBorderColor() {
        const borderColors = ['red', 'blue', 'yellow', 'purple'];
        borderBox.style.borderColor = borderColors[Math.floor(Math.random() * borderColors.length)];
    }

    borderBox.addEventListener('dblclick', changeBorderColor);
    document.getElementById('buttonBox').querySelector('button').addEventListener('click', changeText);
    
});