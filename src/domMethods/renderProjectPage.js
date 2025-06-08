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
}

export default renderProjectPage