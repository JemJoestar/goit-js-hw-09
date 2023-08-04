import { Notify } from 'notiflix/build/notiflix-notify-aio';

refs = {
  startBtn: document.querySelector('button'),
  firstDelayInput: document.querySelector('input[name=delay]'),
  delayInput: document.querySelector('input[name=step]'),
  amountInput: document.querySelector('input[name=amount]'),
};

let currentAmount = 0;

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, {
      useIcon: false,
      clickToClose: true,
    });
  } else {
    Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, {
      useIcon: false,
      clickToClose: true,
    });
  }
}

refs.startBtn.addEventListener('click', event => {
  event.preventDefault();
  const { firstDelayInput, delayInput, amountInput } = refs;
  const delay = Number(delayInput.value);
  const firstDelay = Number(firstDelayInput.value);

  setTimeout(() => {
    const intervalId = setInterval(() => {
      if (currentAmount >= amountInput.value) {
        clearInterval(intervalId);
        currentAmount = 0;
        return;
      }
      createPromise(currentAmount, delay * currentAmount + firstDelay);
      currentAmount += 1;
    }, delay);
  }, firstDelay);
});
