const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const counterDisplay = document.getElementById('counter');
const resetBtn = document.getElementById('reset-btn');

let counter = 0;

incrementBtn.addEventListener('click',() => {
    counter++;
    counterDisplay.textContent = counter;
});

decrementBtn.addEventListener('click', () => {
    counter--;
    counterDisplay.textContent = counter;
})

resetBtn.addEventListener('click', () =>{
    counter = 0;
    counterDisplay.textContent = counter;
})
