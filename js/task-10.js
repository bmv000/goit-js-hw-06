// Задание 10 (выполнять не обязательно)
// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.


// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }
const inputNumber = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');

inputNumber.addEventListener('input', getCurrentInputNumber);
createBtn.addEventListener('click', createBoxes);

function getCurrentInputNumber(event) {
  return event.currentTarget.value;
};

function createBoxes(amount) {
  boxesContainer.innerHTML = '';
  amount = Number(inputNumber.value);
  for (let i = 0; i < amount; i += 1) {
    const boxNew = document.createElement('div');
    boxNew.style.width = `${30 + 10 * i}px`;
    boxNew.style.height = `${30 + 10 * i}px`;
    boxNew.style.backgroundColor = `${getRandomHexColor()}`;
    boxNew.style.marginTop = '5px';
    boxesContainer.appendChild(boxNew);
    };
};
destroyBtn.addEventListener('click', destroyBoxes);
function destroyBoxes() {
  boxesContainer.innerHTML = '';
  inputNumber.value = '';
};
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
};