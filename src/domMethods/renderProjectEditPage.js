function renderProjectEditPage(project) {
    const main = document.getElementsByTagName('main')[0];
    main.innerHTML = '';

    const form = document.createElement('form');
    form.classList.add('projectEditForm');

    const title = document.createElement('h1');
    title.classList.add('projectTitle');
    title.innerText = project.title;
    main.appendChild(title);

    const titleLabel = document.createElement('label');
    titleLabel.innerText = 'Project Title:';
    form.appendChild(titleLabel);

    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.value = project.title;
    titleInput.classList.add('editProjectTitle');
    titleInput.required = true;
    titleInput.maxLength = 50;
    form.appendChild(titleInput);

    const descLabel = document.createElement('label');
    descLabel.innerText = 'Project Description:';
    form.appendChild(descLabel);

    const descInput = document.createElement('input');
    descInput.type = 'text';
    descInput.value = project.desc;
    descInput.classList.add('editProjectDesc');
    descInput.required = true;
    descInput.maxLength = 150;
    form.appendChild(descInput);

    const notesLabel = document.createElement('label');
    notesLabel.innerText = 'Project Notes:';
    form.appendChild(notesLabel);

    const notesInput = document.createElement('textarea');
    notesInput.value = project.notes;
    notesInput.classList.add('editProjectNotes');
    notesInput.maxLength = 500;
    form.appendChild(notesInput);

    const submitButton = document.createElement('button');
    submitButton.type = 'button';
    submitButton.classList.add('submitProjectEdit');
    submitButton.innerText = 'Save Changes';
    form.appendChild(submitButton);

    const backButton = document.createElement('button');
    backButton.type = 'button';
    backButton.classList.add('backToProjectPage');
    backButton.innerText = 'Back';
    form.appendChild(backButton);

    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.classList.add('deleteProjectButton');
    deleteButton.innerText = 'Delete Project';
    form.appendChild(deleteButton);

    main.appendChild(form);
}

export default renderProjectEditPage;
