function renderToDoItem(toDoObject, container){
    const toDoSection = document.createElement('div');
    toDoSection.classList.add('toDoSection');
    toDoSection.dataset.title = toDoObject.title;

    const title = document.createElement('h3');
    title.innerText = toDoObject.title;
    title.classList.add('toDoTitle');
    toDoSection.appendChild(title);

    // const description = document.createElement('p');
    // description.innerText = toDoObject.description;
    // toDoSection.appendChild(description);

    // const notes = document.createElement('p');
    // notes.innerText = toDoObject.notes;
    // toDoSection.appendChild(notes);

    const priority = document.createElement('p');
    priority.innerText = `Priority: ${toDoObject.priority}`;
    toDoSection.appendChild(priority);

    const dueDate = document.createElement('p');
    dueDate.innerText = `Due Date: ${toDoObject.dueDate}`;
    toDoSection.appendChild(dueDate);

    const completedLabel = document.createElement('label');
    const completedCheckbox = document.createElement('input');
    completedCheckbox.type = 'checkbox';
    completedCheckbox.checked = toDoObject.completed;
    completedLabel.appendChild(completedCheckbox);
    completedLabel.appendChild(document.createTextNode(' Completed'));
    toDoSection.appendChild(completedLabel);

    container.appendChild(toDoSection);
}


function renderToDoForProject(project, container){
    project.toDoArray.forEach(toDo => {
        renderToDoItem(toDo, container)
    })
}

export default renderToDoForProject