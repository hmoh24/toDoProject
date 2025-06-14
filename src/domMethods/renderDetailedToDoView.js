function renderDetailedToDoView(toDoObject) {
    const main = document.getElementsByTagName('main')[0];
    const projectTitle = document.getElementsByClassName('projectTitle')[0].innerText;
    main.innerHTML = ''; // Clear the current page

    const pageTitle = document.createElement('h1');
    pageTitle.innerText = 'To-Do Details & Edit';
    main.appendChild(pageTitle);

    const form = document.createElement('form');
    form.classList.add('detailedToDoForm');
    form.setAttribute('toDo', toDoObject.title);
    form.setAttribute('project', projectTitle);

    // Title input
    const titleLabel = document.createElement('label');
    titleLabel.innerText = 'Title: ';
    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.value = toDoObject.title;
    titleInput.name = 'title';
    titleInput.required = true;
    titleInput.classList.add('detailedToDoTitleInput');

    // Description input
    const descriptionLabel = document.createElement('label');
    descriptionLabel.innerText = 'Description: ';
    const descriptionInput = document.createElement('textarea');
    descriptionInput.value = toDoObject.description;
    descriptionInput.name = 'description';
    descriptionInput.classList.add('detailedToDoDescriptionInput');

    // Due Date input
    const dueDateLabel = document.createElement('label');
    dueDateLabel.innerText = 'Due Date: ';
    const dueDateInput = document.createElement('input');
    dueDateInput.type = 'date';
    dueDateInput.value = toDoObject.dueDate;
    dueDateInput.name = 'dueDate';
    dueDateInput.classList.add('detailedToDoDueDateInput');

    // Priority input
    const priorityLabel = document.createElement('label');
    priorityLabel.innerText = 'Priority: ';
    const priorityInput = document.createElement('select');
    priorityInput.name = 'priority';
    priorityInput.classList.add('detailedToDoPriorityInput');

    ['Low', 'Medium', 'High'].forEach(level => {
        const option = document.createElement('option');
        option.value = level;
        option.innerText = level;
        if (toDoObject.priority === level) {
            option.selected = true;
        }
        priorityInput.appendChild(option);
    });

    // Notes input
    const notesLabel = document.createElement('label');
    notesLabel.innerText = 'Notes: ';
    const notesInput = document.createElement('textarea');
    notesInput.value = toDoObject.notes;
    notesInput.name = 'notes';
    notesInput.classList.add('detailedToDoNotesInput');

    // Completed checkbox
    const completedLabel = document.createElement('label');
    completedLabel.innerText = 'Completed: ';
    const completedInput = document.createElement('input');
    completedInput.type = 'checkbox';
    completedInput.checked = toDoObject.completed;
    completedInput.name = 'completed';
    completedInput.classList.add('detailedToDoCompletedInput');

    // Submit button
    const submitButton = document.createElement('button');
    submitButton.classList.add('detailedToDoSubmitButton');
    submitButton.type = 'button';
    submitButton.innerText = 'Save Changes';

    // Back button
    const backButton = document.createElement('button');
    backButton.type = 'button';
    backButton.classList.add('detailedToDoBackButton');
    backButton.innerText = 'Back';

    // Remove button
    const removeToDoButton = document.createElement('button');
    removeToDoButton.type = 'button';
    removeToDoButton.classList.add('removeToDo');
    removeToDoButton.innerText = 'Remove To-Do';

    // Append elements to the form
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
