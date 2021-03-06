// Задание 7
// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>


const refs = {
    inputEl: document.querySelector('#font-size-control'),
    abracadabraEl: document.querySelector('#text')
}
  
refs.abracadabraEl.style.fontSize = `${refs.inputEl.value}px`
function onInputRangeChange() { refs.abracadabraEl.style.fontSize = `${refs.inputEl.value}px` }

refs.inputEl.addEventListener('input', onInputRangeChange)