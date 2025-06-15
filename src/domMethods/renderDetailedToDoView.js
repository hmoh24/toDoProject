function renderDetailedToDoView(toDoObject) {
    const main = document.getElementsByTagName('main')[0];
    const projectTitle = document.getElementsByClassName('projectTitle')[0].innerText;
    main.innerHTML = '';

    const pageTitle = document.createElement('h1');
    pageTitle.innerText = 'To-Do Details & Edit';
    main.appendChild(pageTitle);

    const form = document.createElement('form');
    form.classList.add('detailedToDoForm');
    form.setAttribute('toDo', toDoObject.title);
    form.setAttribute('project', projectTitle);

    const titleLabel = document.createElement('label');
    titleLabel.innerText = 'Title: ';
    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.value = toDoObject.title;
    titleInput.name = 'title';
    titleInput.required = true;
    titleInput.maxLength = 50;
    titleInput.classList.add('detailedToDoTitleInput');

    const descriptionLabel = document.createElement('label');
    descriptionLabel.innerText = 'Description: ';
    const descriptionInput = document.createElement('textarea');
    descriptionInput.value = toDoObject.description;
    descriptionInput.name = 'description';
    descriptionInput.required = true;
    descriptionInput.maxLength = 100;
    descriptionInput.classList.add('detailedToDoDescriptionInput');

    const dueDateLabel = document.createElement('label');
    dueDateLabel.innerText = 'Due Date: ';
    const dueDateInput = document.createElement('input');
    dueDateInput.type = 'date';
    dueDateInput.value = toDoObject.dueDate;
    dueDateInput.name = 'dueDate';
    dueDateInput.required = true;
    dueDateInput.classList.add('detailedToDoDueDateInput');

    const priorityLabel = document.createElement('label');
    priorityLabel.innerText = 'Priority: ';
    const priorityInput = document.createElement('select');
    priorityInput.name = 'priority';
    priorityInput.required = true;
    priorityInput.classList.add('detailedToDoPriorityInput');

    ['Low', 'Medium', 'High'].forEach(level => {
        const option = document.createElement('option');
        option.value = level;
        option.innerText = level;
        if (toDoObject.priority === level) option.selected = true;
        priorityInput.appendChild(option);
    });

    const notesLabel = document.createElement('label');
    notesLabel.innerText = 'Notes: ';
    const notesInput = document.createElement('textarea');
    notesInput.value = toDoObject.notes;
    notesInput.name = 'notes';
    notesInput.maxLength = 250;
    notesInput.classList.add('detailedToDoNotesInput');

    const completedLabel = document.createElement('label');
    completedLabel.innerText = 'Completed: ';
    const completedInput = document.createElement('input');
    completedInput.type = 'checkbox';
    completedInput.checked = toDoObject.completed;
    completedInput.name = 'completed';
    completedInput.classList.add('detailedToDoCompletedInput');

    const submitButton = document.createElement('button');
    submitButton.classList.add('detailedToDoSubmitButton');
    submitButton.type = 'button';
    submitButton.innerText = 'Save Changes';

    const backButton = document.createElement('button');
    backButton.type = 'button';
    backButton.classList.add('detailedToDoBackButton');
    backButton.innerText = 'Back';

    const removeToDoButton = document.createElement('button');
    removeToDoButton.type = 'button';
    removeToDoButton.classList.add('removeToDo');
    removeToDoButton.innerText = 'Remove To-Do';

    form.appendChild(titleLabel);
    form.appendChild(titleInput);
    form.appendChild(document.createElement('br'));

    form.appendChild(descriptionLabel);
    form.appendChild(descriptionInput);
    form.appendChild(document.createElement('br'));

    form.appendChild(dueDateLabel);
    form.appendChild(dueDateInput);
    form.appendChild(document.createElement('br'));

    form.appendChild(priorityLabel);
    form.appendChild(priorityInput);
    form.appendChild(document.createElement('br'));

    form.appendChild(notesLabel);
    form.appendChild(notesInput);
    form.appendChild(document.createElement('br'));

    form.appendChild(completedLabel);
    form.appendChild(completedInput);
    form.appendChild(document.createElement('br'));

    form.appendChild(submitButton);
    form.appendChild(backButton);
    form.appendChild(removeToDoButton);

    main.appendChild(form);
}

export default renderDetailedToDoView;

