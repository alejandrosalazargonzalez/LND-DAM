document.querySelector('h1').style.backgroundColor = 'yellow';
let subtitles = document.querySelectorAll('h2');
subtitles.forEach(subtitle => subtitle.classList.add('subtitulos'));

let estiloLetrasElements = document.querySelectorAll('.estilo-letras');
estiloLetrasElements.forEach(element => element.classList.remove('estilo-letras'));

