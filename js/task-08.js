// Задание 8 - дополнительное, выполнять не обязательно
// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Создать</button>
//   <button type="button" data-action="destroy">Очистить</button>
// </div>

// <div id="boxes"></div>
const inputRef = document.querySelector('input[type="number"]')
const createBtnRef = document.querySelector('button[data-action="render"]')
const clearBtnRef = document.querySelector('button[data-action="destroy"]')
const boxesContainerRef = document.getElementById('boxes')

createBtnRef.addEventListener('click', createBoxes)
clearBtnRef.addEventListener('click', destroyBoxes);

function createBoxes() {
    const arrByInputLength = [];
    arrByInputLength.length = inputRef.value;
    let tempSizeValue = 30;
    
    const boxesEl = [...arrByInputLength].reduce((arr) => {
    const boxEl = document.createElement('div');
    boxEl.style.width = `${tempSizeValue}px`;
    boxEl.style.height = `${tempSizeValue}px`;
    boxEl.style.backgroundColor = '#' + (Math.random().toString(16)).substring(2,8);
    tempSizeValue += 10;
    return [...arr, boxEl]
}, [])

boxesContainerRef.append(...boxesEl)
};


function destroyBoxes() {
    boxesContainerRef.innerHTML = '';
    inputRef.value = '';
}