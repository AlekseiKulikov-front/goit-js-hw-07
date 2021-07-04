const inputEl = document.querySelector('#name-input');
/* console.log(inputElem); */

const nameEl = document.querySelector('#name-output');
/* console.log(nameElem); */

const onInputName = event => {
  const userName = event.currentTarget.value;
  console.log(userName);
  return (nameEl.textContent = userName ? `${userName}` : 'незнакомец');
};

inputEl.addEventListener('input', onInputName);
