document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.querySelector('.add-btn');
    const todoInput = document.querySelector('.todo-input');
    const todoList = document.querySelector('.todo-list');
     
    addButton.addEventListener('click', () => {
        const task = todoInput.value.trim();
        if (task) {
            const listItem = document.createElement('li');
            listItem.className = 'todo-item';
            listItem.innerHTML = `
                <span>${task}</span>
                <button class="delete-btn"> ✘ </button>
                &nbsp;
                <button class='correct-btn'> ✓ </button>
            `;
            todoList.appendChild(listItem);
            todoInput.value = '';

            const deleteButton = listItem.querySelector('.delete-btn');
            deleteButton.addEventListener('click', () => {
                todoList.removeChild(listItem);
            });
            const correctButton = listItem.querySelector('.correct-btn');
            correctButton.addEventListener('click', () => {
                const span = listItem.querySelector('span');
                if (span.style.textDecoration === 'line-through') {
                    span.style.textDecoration = 'none';
                } else {
                    span.style.textDecoration = 'line-through';
                }
            });
        }
    });
    
    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addButton.click();
        }
    });
});

