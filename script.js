function typeWriter(element) {
  const textArray = element.innerHTML.split('');
  element.innerHTML = '';
  textArray.forEach((letter, i) => {
    setTimeout(() => element.innerHTML += letter, i * 75);
  });
  blinkText(element);
}

function blinkText(element) {
  let backgroundColor = getRandomColor();
  let color = getRandomColor();
  setInterval(() => {
    element.style.backgroundColor = backgroundColor;
    element.style.color = color;
//     if (element.style.backgroundColor == 'black') {
//       element.style.backgroundColor = 'white';
//       element.style.color = 'black';
//     } else {
//       element.style.backgroundColor = 'black';
//       element.style.color = 'white';
//     }
  }, 500)
}

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const p = document.querySelector('#text');
typeWriter(p);
