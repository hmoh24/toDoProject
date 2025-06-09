import renderToDoForProject from "./renderToDoForProject";

function renderProjectPage(project) {
    const main = document.getElementsByTagName('main')[0]; 
    main.innerHTML = ''; // Clear the current page

    const title = document.createElement('h1');
    title.classList.add('projectTitle')
    title.innerText = project.title;
    main.appendChild(title);

    const desc = document.createElement('p');
    desc.innerText = project.desc;
    main.appendChild(desc);

    const notes = document.createElement('p');
    notes.innerText = project.notes;
    main.appendChild(notes);

    // toDoArray handling can go here later
    const toDoDiv = document.createElement('div');
    toDoDiv.className = 'toDodiv';
    main.appendChild(toDoDiv);
    renderToDoForProject(project, toDoDiv);

    const editProjectButton = document.createElement('button');
    editProjectButton.classList = 'editProject';
    editProjectButton.innerText = 'Edit Project';
    main.appendChild(editProjectButton);
}

export default renderProjectPage