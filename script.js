function typeWriter(element) {
  const textArray = element.innerHTML.split('');
  element.innerHTML = '';
  textArray.forEach((letter, i) => {
    setTimeout(() => {
      element.innerHTML += letter;
    }, i * 75);
  });
}

const p = document.querySelector('#text');
typeWriter(p);