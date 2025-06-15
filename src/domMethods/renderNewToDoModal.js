function renderNewToDoModal() {
    const body = document.getElementsByTagName('body')[0];

    const modalOverlay = document.createElement('div');
    modalOverlay.classList.add('modalOverlay');

    const modalContainer = document.createElement('div');
    modalContainer.classList.add('modalContainerToDo');

    const closeButton = document.createElement('span');
    closeButton.innerText = 'X';
    closeButton.classList.add('closeModal');
    modalContainer.appendChild(closeButton);

    const form = document.createElement('form');
    form.classList.add('newProjectFormToDo');

    const titleLabel = document.createElement('label');
    titleLabel.innerText = 'To-Do Title:';
    form.appendChild(titleLabel);

    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.classList.add('newToDoTitle');
    titleInput.required = true;
    titleInput.maxLength = 50;
    form.appendChild(titleInput);

    const descLabel = document.createElement('label');
    descLabel.innerText = 'To-Do Description:';
    form.appendChild(descLabel);

    const descInput = document.createElement('textarea');
    descInput.classList.add('newToDoDesc');
    descInput.required = true;
    descInput.maxLength = 100;
    form.appendChild(descInput);

    const notesLabel = document.createElement('label');
    notesLabel.innerText = 'To-Do Notes:';
    form.appendChild(notesLabel);

    const notesInput = document.createElement('textarea');
    notesInput.classList.add('newToDoNotes');
    notesInput.maxLength = 250;
    form.appendChild(notesInput);

    const priorityLabel = document.createElement('label');
    priorityLabel.innerText = 'Priority:';
    form.appendChild(priorityLabel);

    const prioritySelect = document.createElement('select');
    prioritySelect.classList.add('newToDoPriority');
    prioritySelect.required = true;

    ['Low', 'Medium', 'High'].forEach(level => {
        const option = document.createElement('option');
        option.value = level;
        option.innerText = level;
        prioritySelect.appendChild(option);
    });
    form.appendChild(prioritySelect);

    const dateLabel = document.createElement('label');
    dateLabel.innerText = 'Date:';
    form.appendChild(dateLabel);

    const dateInput = document.createElement('input');
    dateInput.type = 'date';
    dateInput.classList.add('newToDoDate');
    dateInput.required = true;
    form.appendChild(dateInput);

    const submitButton = document.createElement('button');
    submitButton.type = 'button';
    submitButton.classList.add('submitNewToDo');
    submitButton.innerText = 'Create To-Do';
    form.appendChild(submitButton);

    modalContainer.appendChild(form);
    modalOverlay.appendChild(modalContainer);
    body.appendChild(modalOverlay);
}


export default renderNewToDoModal