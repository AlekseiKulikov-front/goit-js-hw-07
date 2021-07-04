const inputEl = document.querySelector('#font-size-control');
/* console.log(inputEl); */

const textEl = document.querySelector('#text');
/* console.log(textEl); */
/* console.log(inputEl.value); */

inputEl.addEventListener('input', function () {
  text.style.fontSize = `${inputEl.value * 0.32}px`;
});
/* console.log(inputEl.value); */
