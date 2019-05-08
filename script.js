function typeWriter(element) {
  const get = getQueryVariable('texto')
  if (get) {
    const textArray = get.split('');
  } else {
    const textArray = element.innerHTML.split('');
  }
  element.innerHTML = '';
  textArray.forEach((letter, i) => {
    setTimeout(() => {
      element.innerHTML += letter;
    }, i * 75);
  });
}

function getQueryVariable(variable) {
       let query = window.location.search.substring(1);
       let vars = query.split("&");
       for (let i = 0; i < vars.length; i++) {
         var pair = vars[i].split("=");
           if(pair[0] == variable) return pair[1]        
       }
       return(false);
}

const p = document.querySelector('#text');
typeWriter(p);
