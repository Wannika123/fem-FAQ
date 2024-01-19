console.log('Hello');

const questions = document.querySelectorAll('.question-wrapper');
const toggleBtns = document.querySelectorAll('.toggle-btn');
const answers = document.querySelectorAll('.answer');

for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener('click', () => {
        answers[i].classList.toggle('hide');
        if (/plus/.test(toggleBtns[i].src)) {
            toggleBtns[i].setAttribute('src', './assets/images/icon-minus.svg');
        } else {
            toggleBtns[i].setAttribute('src', './assets/images/icon-plus.svg');
        }
    });
}