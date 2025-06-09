function renderProjectEditPage(project) {
    const main = document.getElementsByTagName('main')[0];
    main.innerHTML = ''; // Clear the current page

    const form = document.createElement('form');
    form.classList.add('projectEditForm');

    const title = document.createElement('h1');
    title.classList.add('projectTitle')
    title.innerText = project.title;
    main.appendChild(title);

    // Title input
    const titleLabel = document.createElement('label');
    titleLabel.innerText = 'Project Title:';
    form.appendChild(titleLabel);

    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.value = project.title;
    titleInput.classList.add('editProjectTitle');
    form.appendChild(titleInput);

    // Description input
    const descLabel = document.createElement('label');
    descLabel.innerText = 'Project Description:';
    form.appendChild(descLabel);

    const descInput = document.createElement('textarea');
    descInput.value = project.desc;
    descInput.classList.add('editProjectDesc');
    form.appendChild(descInput);

    // Notes input
    const notesLabel = document.createElement('label');
    notesLabel.innerText = 'Project Notes:';
    form.appendChild(notesLabel);

    const notesInput = document.createElement('textarea');
    notesInput.value = project.notes;
    notesInput.classList.add('editProjectNotes');
    form.appendChild(notesInput);

    // Submit button
    const submitButton = document.createElement('button');
    submitButton.type = 'button'; 
    submitButton.classList.add('submitProjectEdit');
    submitButton.innerText = 'Save Changes';
    form.appendChild(submitButton);

    // Back button
    const backButton = document.createElement('button');
    backButton.type = 'button';
    backButton.classList.add('backToProjectPage');
    backButton.innerText = 'Back';
    form.appendChild(backButton);

    main.appendChild(form);
}

export default renderProjectEditPage;