function renderToDoItem(toDoObject, container){
    const title = document.createElement('h3');
    title.innerText = toDoObject.title;
    container.appendChild(title);

    const description = document.createElement('p');
    description.innerText = toDoObject.description;
    container.appendChild(description);

    const notes = document.createElement('p');
    notes.innerText = toDoObject.notes;
    container.appendChild(notes);

    const priority = document.createElement('p');
    priority.innerText = `Priority: ${toDoObject.priority}`;
    container.appendChild(priority);

    const dueDate = document.createElement('p');
    dueDate.innerText = `Due Date: ${toDoObject.dueDate}`;
    container.appendChild(dueDate);

    const completedLabel = document.createElement('label');
    const completedCheckbox = document.createElement('input');
    completedCheckbox.type = 'checkbox';
    completedCheckbox.checked = toDoObject.completed;
    completedLabel.appendChild(completedCheckbox);
    completedLabel.appendChild(document.createTextNode(' Completed'));
    container.appendChild(completedLabel);
}


function renderToDoForProject(project, container){
    project.toDoArray.forEach(toDo => {
        renderToDoItem(toDo, container)
    })
}

export default renderToDoForProject