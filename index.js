import { countWords } from './countWords_module.js';
import { countResultGenerator } from './resultGenerator_module.js';

const counterBtn = document.querySelector('.input-box__btn');
const countResultbox = document.querySelector('.input-box__output-count');

counterBtn.addEventListener('click', () => {
  countResultbox.innerHTML = '';
  const inputText = document.querySelector('textarea').value.trim();
  countResultGenerator(countWords(inputText));
});



