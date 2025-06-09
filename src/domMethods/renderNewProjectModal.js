function renderNewProjectModal(){
    const body = document.getElementsByTagName('body')[0];


    // Create modal background
    const modalOverlay = document.createElement('div');
    modalOverlay.classList.add('modalOverlay');

    // Create modal container
    const modalContainer = document.createElement('div');
    modalContainer.classList.add('modalContainer');

    // Create close (X) button
    const closeButton = document.createElement('span');
    closeButton.innerText = 'X';
    closeButton.classList.add('closeModal');
    modalContainer.appendChild(closeButton);

    // Create the form
    const form = document.createElement('form');
    form.classList.add('newProjectForm');

    // Title input
    const titleLabel = document.createElement('label');
    titleLabel.innerText = 'Project Title:';
    form.appendChild(titleLabel);

    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.classList.add('newProjectTitle');
    form.appendChild(titleInput);

    // Description input
    const descLabel = document.createElement('label');
    descLabel.innerText = 'Project Description:';
    form.appendChild(descLabel);

    const descInput = document.createElement('textarea');
    descInput.classList.add('newProjectDesc');
    form.appendChild(descInput);

    // Notes input
    const notesLabel = document.createElement('label');
    notesLabel.innerText = 'Project Notes:';
    form.appendChild(notesLabel);

    const notesInput = document.createElement('textarea');
    notesInput.classList.add('newProjectNotes');
    form.appendChild(notesInput);

    // Submit button
    const submitButton = document.createElement('button');
    submitButton.type = 'button';
    submitButton.classList.add('submitNewProject');
    submitButton.innerText = 'Create Project';
    form.appendChild(submitButton);

    // Build modal
    modalContainer.appendChild(form);
    modalOverlay.appendChild(modalContainer);
    body.appendChild(modalOverlay);
}

export default renderNewProjectModal;
