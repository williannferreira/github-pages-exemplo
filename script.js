function typeWriter(element) {
  const textArray = element.innerHTML.split('');
  element.innerHTML = '';
  textArray.forEach((letter, i) => {
    setTimeout(() => {
      element.innerHTML += letter;
    }, i * 75);
  });
  blinkText(element);
}

function blinkText(element) {
  setInterval(() => {
    if (element.style.backgroundColor == 'black') {
      element.style.backgroundColor = 'white';
      element.style.color = 'black';
    } else {
      element.style.backgroundColor = 'black';
      element.style.color = 'white';
    }
  }, 500)
}

const p = document.querySelector('#text');
typeWriter(p);
