document.querySelectorAll('.tasks').forEach(el => {
    el.addEventListener('dragover', e => {
        e.preventDefault();
        const dragging = document.querySelector('.dragging');
        if (dragging) el.appendChild(dragging);
    });
});

function addTask(colId) {
    const title = prompt('Título da tarefa:');
    if(title) {
        const task = document.createElement('div');
        task.className = 'task';
        task.textContent = title;
        task.draggable = true;

        const delBtn = document.createElement('span');
        delBtn.textContent = '🗑️';
        delBtn.style.cursor = 'pointer';
        delBtn.onclick = () => task.remove();

        task.appendChild(delBtn);

        task.addEventListener('dragstart', () => {
            task.classList.add('dragging');
        });
        task.addEventListener('dragend', () => {
            task.classList.remove('dragging');
        });

        document.querySelector(`#${colId} .tasks`).appendChild(task);
    }
}
