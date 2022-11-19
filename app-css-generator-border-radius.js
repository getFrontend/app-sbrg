const defaultBorderRadiusResult = 'border-radius: 0;';
const pixel = 'px';
const percentrage = '%';
let px = pixel; //by default

const togglePixel = document.getElementById('pixel');
const togglePercentrage = document.getElementById('percentrage');

const rangeBorderRadiusTopLeft = document.querySelector('[data-range="border-radius-top-left"]'),
    numberBorderRadiusTopLeft = document.querySelector('[data-number="border-radius-top-left"]'),
    resultBorderRadiusTopLeft = document.querySelector('[data-res="border-radius-top-left"]');

const rangeBorderRadiusTopRight = document.querySelector('[data-range="border-radius-top-right"]'),
    numberBorderRadiusTopRight = document.querySelector('[data-number="border-radius-top-right"]'),
    resultBorderRadiusTopRight = document.querySelector('[data-res="border-radius-top-right"]');

const rangeBorderRadiusBottomRight = document.querySelector('[data-range="border-radius-bottom-right"]'),
    numberBorderRadiusBottomRight = document.querySelector('[data-number="border-radius-bottom-right"]'),
    resultBorderRadiusBottomRight = document.querySelector('[data-res="border-radius-bottom-right"]');

const rangeBorderRadiusBottomLeft = document.querySelector('[data-range="border-radius-bottom-left"]'),
    numberBorderRadiusBottomLeft = document.querySelector('[data-number="border-radius-bottom-left"]'),
    resultBorderRadiusBottomLeft = document.querySelector('[data-res="border-radius-bottom-left"]');

const allRanges = document.querySelectorAll('[data-range]');
const allNumbers = document.querySelectorAll('[data-number]');

const box = document.querySelector('.box');

const result = document.querySelector('[data-result]');
const copy = document.querySelector('[data-btn="copy"]');

// console.log(rangeBorderRadiusTopLeft);
// console.log(numberBorderRadiusTopLeft);
// console.log(resultBorderRadiusTopLeft);
// console.log(allRanges)
// console.log(box);

togglePixel.onclick = () => {
    px = pixel;
    document.documentElement.style.setProperty('--mode', `"${px}"`);
    resetValue();
}
togglePercentrage.onclick = () => {
    px = percentrage;
    document.documentElement.style.setProperty('--mode', `"${px}"`);
    resetValue();
}


const radiusGeneratorbyRange = () => {
    getRange();
    getRangeToNumber();

    getResult();

    showCopyBtn();
    copyCSS();
}

const radiusGeneratorbyNumber = () => {
    getNumber();
    getNumbertoRange();

    getResult();

    showCopyBtn();
    copyCSS();
}

allRanges.forEach(function (item) {
    item.addEventListener('input', radiusGeneratorbyRange);
});

allNumbers.forEach(function (item) {
    item.addEventListener('input', radiusGeneratorbyNumber);
})


function getRange() {
    resultBorderRadiusTopLeft.innerHTML = rangeBorderRadiusTopLeft.value;
    resultBorderRadiusTopRight.innerHTML = rangeBorderRadiusTopRight.value;
    resultBorderRadiusBottomRight.innerHTML = rangeBorderRadiusBottomRight.value;
    resultBorderRadiusBottomLeft.innerHTML = rangeBorderRadiusBottomLeft.value;

    // drawBox();
}
function getRangeToNumber() {
    numberBorderRadiusTopLeft.value = rangeBorderRadiusTopLeft.value;
    numberBorderRadiusTopRight.value = rangeBorderRadiusTopRight.value;
    numberBorderRadiusBottomRight.value = rangeBorderRadiusBottomRight.value;
    numberBorderRadiusBottomLeft.value = rangeBorderRadiusBottomLeft.value;
}


function getNumber() {
    resultBorderRadiusTopLeft.innerHTML = numberBorderRadiusTopLeft.value;
    resultBorderRadiusTopRight.innerHTML = numberBorderRadiusTopRight.value;
    resultBorderRadiusBottomRight.innerHTML = numberBorderRadiusBottomRight.value;
    resultBorderRadiusBottomLeft.innerHTML = numberBorderRadiusBottomLeft.value;

    // drawBox();
}
function getNumbertoRange() {
    rangeBorderRadiusTopLeft.value = numberBorderRadiusTopLeft.value;
    rangeBorderRadiusTopRight.value = numberBorderRadiusTopRight.value;
    rangeBorderRadiusBottomRight.value = numberBorderRadiusBottomRight.value;
    rangeBorderRadiusBottomLeft.value = numberBorderRadiusBottomLeft.value;
}

function getResult() {
    let brTopLeft = rangeBorderRadiusTopLeft.value,
        brTopRight = rangeBorderRadiusTopRight.value,
        brBottomRight = rangeBorderRadiusBottomRight.value,
        brBotomLeft = rangeBorderRadiusBottomLeft.value;

    brTopLeft = (parseInt(brTopLeft) === 0) ? 0 : `${brTopLeft}${px}`;
    brTopRight = (parseInt(brTopRight) === 0) ? 0 : `${brTopRight}${px}`;
    brBottomRight = (parseInt(brBottomRight) === 0) ? 0 : `${brBottomRight}${px}`;
    brBotomLeft = (parseInt(brBotomLeft) === 0) ? 0 : `${brBotomLeft}${px}`;

    if (brTopLeft === 0 && brTopRight === 0 && brBottomRight === 0 && brBotomLeft === 0) {
        result.innerHTML = defaultBorderRadiusResult;
        box.style.borderRadius = '0';
    } else if (brTopLeft === brTopRight && brTopLeft === brBottomRight && brTopLeft === brBotomLeft) {
        result.innerHTML = `border-radius: ${brTopLeft};`;
        box.style.borderRadius = `${brTopLeft}`;
    } else {
        result.innerHTML = `border-radius: ${brTopLeft} ${brTopRight} ${brBottomRight} ${brBotomLeft};`;
        box.style.borderRadius = `${brTopLeft} ${brTopRight} ${brBottomRight} ${brBotomLeft}`;
    }
}

// function drawBox() {
// box.style.borderTopLeftRadius = `${numberBorderRadiusTopLeft.value}px`;
// box.style.borderTopRightRadius = `${numberBorderRadiusTopRight.value}px`;
// box.style.borderBottomRightRadius = `${numberBorderRadiusBottomRight.value}px`;
// box.style.borderBottomLeftRadius = `${numberBorderRadiusBottomLeft.value}px`;
// }

function resetValue() {
    rangeBorderRadiusTopLeft.value = '0';
    rangeBorderRadiusTopRight.value = '0';
    rangeBorderRadiusBottomRight.value = '0';
    rangeBorderRadiusBottomLeft.value = '0';

    resultBorderRadiusTopLeft.innerHTML = '0';
    resultBorderRadiusTopRight.innerHTML = '0';
    resultBorderRadiusBottomRight.innerHTML = '0';
    resultBorderRadiusBottomLeft.innerHTML = '0';

    getRangeToNumber();

    getResult();
}


const showCopyBtn = () => copy.classList.remove('none');

function copyCSS() {
    copy.onclick = () => navigator.clipboard.writeText(result.innerHTML);
}