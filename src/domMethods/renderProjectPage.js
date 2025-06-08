import renderToDoForProject from "./renderTodoItem";

function renderProjectPage(project) {
    const main = document.getElementsByTagName('main')[0]; 

    const title = document.createElement('h1');
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
}

export default renderProjectPage