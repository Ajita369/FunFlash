const texts = ["Gaming is Fun!", "Relieve Stress,Play for Fun!"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.getElementById('typewriter-text').textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(() => {
            document.getElementById('typewriter-text').textContent = '';
            setTimeout(type, 500);
        }, 2000);
    } else {
        setTimeout(type, 200);
    }
})();
