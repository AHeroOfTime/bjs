import { isValidColor } from './colors.js';

function logWords(results) {
  // console.log(results[results.length - 1][0].transcript);
}

export function handleResult({ results }) {
  logWords(results);
  const words = results[results.length - 1][0].transcript;
  // lowercase everything
  let color = words.toLowerCase();
  // strip any spaces out
  color = color.replace(/\s/g, '');
  // check if it is a valid color
  if (!isValidColor(color)) return;
  // if it is, show the UI for that
  const colorSpan = document.querySelector(`.${color}`);
  colorSpan.classList.add('got');
  console.log('This is a valid color!');
  console.log(color);
  // change the bg color
  document.body.style.backgroundColor = color;
}
