const incrementListenBtn = document.querySelector("button[data-action='increment']");
const decrementListenBtn = document.querySelector("button[data-action='decrement']");
let counterValue = 0;

function onIncrementBtnClick () {
    counterValue += 1;
    document.querySelector('#value').textContent = counterValue;
}

function onDecrementBtnClick () {
    counterValue += 1;
    document.querySelector('#value').textContent = counterValue;
}

incrementListenBtn.addEventListener('click', onIncrementBtnClick);
decrementListenBtn.addEventListener('click', onDecrementBtnClick);