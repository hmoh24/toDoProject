function renderNewToDoModal(){
    const body = document.getElementsByTagName('body')[0];

    // Create modal background
    const modalOverlay = document.createElement('div');
    modalOverlay.classList.add('modalOverlay');

    // Create modal container
    const modalContainer = document.createElement('div');
    modalContainer.classList.add('modalContainerToDo');

    // Create close (X) button
    const closeButton = document.createElement('span');
    closeButton.innerText = 'X';
    closeButton.classList.add('closeModal');
    modalContainer.appendChild(closeButton);

    // Create the form
    const form = document.createElement('form');
    form.classList.add('newProjectFormToDo');

    // Title input
    const titleLabel = document.createElement('label');
    titleLabel.innerText = 'To-Do Title:';
    form.appendChild(titleLabel);

    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.classList.add('newToDoTitle');
    form.appendChild(titleInput);

    // Description input
    const descLabel = document.createElement('label');
    descLabel.innerText = 'To-Do Description:';
    form.appendChild(descLabel);

    const descInput = document.createElement('textarea');
    descInput.classList.add('newToDoDesc');
    form.appendChild(descInput);

    // Notes input
    const notesLabel = document.createElement('label');
    notesLabel.innerText = 'To-Do Notes:';
    form.appendChild(notesLabel);

    const notesInput = document.createElement('textarea');
    notesInput.classList.add('newToDoNotes');
    form.appendChild(notesInput);

    // Priority input
    const priorityLabel = document.createElement('label');
    priorityLabel.innerText = 'Priority (put radio):';
    form.appendChild(priorityLabel);

    const priorityInput = document.createElement('input');
    priorityInput.classList.add('newToDoPriority');
    form.appendChild(priorityInput);

    //Date input
    const dateLabel = document.createElement('label');
    dateLabel.innerText = 'Date (put date picker):';
    form.appendChild(dateLabel);

    const dateInput = document.createElement('input');
    dateInput.classList.add('newToDoDate');
    form.appendChild(dateInput);

    // Submit button
    const submitButton = document.createElement('button');
    submitButton.type = 'button';
    submitButton.classList.add('submitNewToDo');
    submitButton.innerText = 'Create To-Do';
    form.appendChild(submitButton);

    // Build modal
    modalContainer.appendChild(form);
    modalOverlay.appendChild(modalContainer);
    body.appendChild(modalOverlay);

}

export default renderNewToDoModal