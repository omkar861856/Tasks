document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('addButton');
    const todoInput = document.getElementById('todoInput');
    const todoList = document.getElementById('todoList');

    function createTodoItem(text) {
        const li = document.createElement('li');
        
        const span = document.createElement('span');
        span.textContent = text;
        
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => {
            todoList.removeChild(li);
        };
        
        li.appendChild(span);
        li.appendChild(deleteButton);
        
        return li;
    }

    addButton.addEventListener('click', () => {
        const todoText = todoInput.value.trim();
        if (todoText) {
            const todoItem = createTodoItem(todoText);
            todoList.appendChild(todoItem);
            todoInput.value = '';
        }
    });

    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addButton.click();
        }
    });
});
