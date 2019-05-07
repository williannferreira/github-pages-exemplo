paragrafo = document.querySelector('#text');

texto = 'Github Pages Exemplo - novo';

texto = texto.split('');

for(let i = 0; i < texto.length; i++) {
  setTimeout(() => {
    paragrafo.innerText += texto[i];
  }, i * 70);
}
