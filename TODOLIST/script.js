// 1. Получаем ссылки на ключевые элементы DOM
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// 2. Функция для создания и добавления элемента задачи
function addTodoItem(taskText) {
    // Создаем новый элемент списка (<li>)
    const listItem = document.createElement('li');

    // Создаем элемент <span> для текста задачи
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    // Добавляем обработчик клика для пометки как "выполнено"
    taskSpan.addEventListener('click', () => {
        listItem.classList.toggle('completed'); // Переключает класс 'completed'
    });

    // Создаем кнопку для удаления задачи
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Удалить';

    // Добавляем обработчик клика для удаления задачи
    deleteButton.addEventListener('click', () => {
        listItem.remove(); // Удаляем родительский элемент <li>
    });

    // Собираем элемент <li>: добавляем текст и кнопку
    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteButton);

    // Добавляем готовый элемент <li> в список <ul>
    todoList.appendChild(listItem);
}

// 3. Обработчик события отправки формы
todoForm.addEventListener('submit', function(event) {
    // Предотвращаем стандартное поведение формы (перезагрузку страницы)
    event.preventDefault(); 

    // Получаем текст из поля ввода и удаляем пробелы в начале/конце
    const taskText = todoInput.value.trim();

    // Проверяем, что поле не пустое
    if (taskText !== "") {
        addTodoItem(taskText);
        todoInput.value = ""; // Очищаем поле ввода
    }
});

// *Опционально: Добавим несколько задач по умолчанию при загрузке*
document.addEventListener('DOMContentLoaded', () => {
    addTodoItem("Сделать To-Do Список");
    addTodoItem("Купить продукты");
    addTodoItem("Позвонить другу");
});