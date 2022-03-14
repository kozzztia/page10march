
const page = document.querySelector('.page')

// ---------------------------header



// firstSlider
const firstItems = document.querySelectorAll('.firstSlider__item')
const firstPrev = document.querySelector('.firstSlider__btn--prev');
const firstNext = document.querySelector('.firstSlider__btn--next');



function sliderMove(item, prev, next, nextClass, activeClass, prevClass) {
    function delClass() {
        for (i = 0; i < item.length; i++) {
            item[i].classList.remove(nextClass);
            item[i].classList.remove(activeClass);
            item[i].classList.remove(prevClass);

        }
    }
    let nextStep = 0;
    let activeStep = 1;
    let prevStep = 2;
    next.onclick = () => {
        prevStep++;
        activeStep++;
        nextStep++;
        if (prevStep === item.length) {
            prevStep = 0;
        } else if (activeStep === item.length) {
            activeStep = 0;
        } else if (nextStep === item.length) {
            nextStep = 0;
        }
        // console.log(prevStep, activeStep, nextStep)
        delClass();
        item[prevStep].classList.add(nextClass)
        item[activeStep].classList.add(activeClass)
        item[nextStep].classList.add(prevClass)
    }
    prev.onclick = () => {
        delClass();
        prevStep--;
        activeStep--;
        nextStep--;
        if (prevStep === -1) {
            prevStep = item.length - 1;
        } else if (activeStep === -1) {
            activeStep = item.length - 1;
        } else if (nextStep === -1) {
            nextStep = item.length - 1;
        }
        // console.log(prevStep, activeStep, nextStep)
        delClass();
        item[prevStep].classList.add(nextClass)
        item[activeStep].classList.add(activeClass)
        item[nextStep].classList.add(prevClass)
    }


}
sliderMove(firstItems, firstPrev, firstNext, 'firstSlider__item--next', 'firstSlider__item--active', 'firstSlider__item--prev')

// ---------------------------------second slider

const secondPrev = document.querySelector('.secondSlider__btn--prev');
const secondNext = document.querySelector('.secondSlider__btn--next');
const secondItem = document.querySelectorAll('.secondSlider__item');

sliderMove(secondItem, secondPrev, secondNext, 'secondSlider__item--next', 'secondSlider__item--active', 'secondSlider__item--prev');

// -----------------------------------map

const card = document.querySelectorAll('.stages__card');

window.addEventListener('resiz', () => {
    console.log(card[1].slientWidth)
})