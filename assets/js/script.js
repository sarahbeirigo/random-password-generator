const characters = "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";
var rangerSlider = document.getElementById('slider-range');
const h1 = document.getElementById('h1');

let sliderValue = rangerSlider.value;

rangerSlider.addEventListener('input', function () {
    sliderValue = this.value;
    passwordGenerate(sliderValue, characters);

    const passwordLenght = document.getElementById('password-lenght')
    passwordLenght.textContent = sliderValue;
    rangerSlider.parentNode.insertBefore(passwordLenght, rangerSlider);
});


function passwordGenerate(passwordSize, charactersArray) {
    let password = new Array(passwordSize);

    // console.log(caracteres.length)
    for (let i = 0; i < passwordSize; i++) {
        var x = Math.floor(Math.random() * charactersArray.length);
        password[i] = charactersArray[x];
    }

    const passwordResult = document.getElementById('password-result');
    passwordResult.textContent = password.join('');
    h1.insertAdjacentElement('afterend', passwordResult);;

}


const copyNot = document.getElementById('copy-not');
function copy() {
    const textCopy = document.getElementById("password-result").innerText;
    navigator.clipboard.writeText(textCopy);
    copyNot.style.display = "block";

    setTimeout(() => {
        copyNot.style.display = "none";
    }, 1500);

}





