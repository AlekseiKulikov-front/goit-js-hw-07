const spanEl = document.querySelector('#value');

let counterValue = Number(spanEl.textContent);

/* console.log(counterValue); */

const btnPlus = document.querySelector('[data-action="increment"]');

const btnMinus = document.querySelector('[data-action="decrement"]');

/* console.log(btnPlus, btnMinus); */

const plus = () => {
  for (let i = 0; i !== undefined; i += 1) {
    counterValue += 1;
    console.log(counterValue);
    return (spanEl.textContent = `${counterValue}`);
  }
};

const minus = () => {
  counterValue -= 1;
  console.log(counterValue);
  spanEl.textContent = `${counterValue}`;
};

const btnPlusEvent = btnPlus.addEventListener('click', plus);

const btnMinusEvent = btnMinus.addEventListener('click', minus);

/* console.log(counterValue); */
