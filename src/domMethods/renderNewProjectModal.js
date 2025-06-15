function renderNewProjectModal() {
    const body = document.getElementsByTagName('body')[0];

    const modalOverlay = document.createElement('div');
    modalOverlay.classList.add('modalOverlay');

    const modalContainer = document.createElement('div');
    modalContainer.classList.add('modalContainer');

    const closeButton = document.createElement('span');
    closeButton.innerText = 'X';
    closeButton.classList.add('closeModal');
    modalContainer.appendChild(closeButton);

    const form = document.createElement('form');
    form.classList.add('newProjectForm');

    const titleLabel = document.createElement('label');
    titleLabel.innerText = 'Project Title:';
    form.appendChild(titleLabel);

    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.classList.add('newProjectTitle');
    titleInput.required = true;
    titleInput.maxLength = 50;
    form.appendChild(titleInput);

    const descLabel = document.createElement('label');
    descLabel.innerText = 'Project Description:';
    form.appendChild(descLabel);

    const descInput = document.createElement('textarea');
    descInput.classList.add('newProjectDesc');
    descInput.required = true;
    descInput.maxLength = 150;
    form.appendChild(descInput);

    const notesLabel = document.createElement('label');
    notesLabel.innerText = 'Project Notes:';
    form.appendChild(notesLabel);

    const notesInput = document.createElement('textarea');
    notesInput.classList.add('newProjectNotes');
    notesInput.maxLength = 500;
    form.appendChild(notesInput);

    const submitButton = document.createElement('button');
    submitButton.type = 'button';
    submitButton.classList.add('submitNewProject');
    submitButton.innerText = 'Create Project';
    form.appendChild(submitButton);

    modalContainer.appendChild(form);
    modalOverlay.appendChild(modalContainer);
    body.appendChild(modalOverlay);
}


export default renderNewProjectModal;
