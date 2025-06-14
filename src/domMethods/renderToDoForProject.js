function renderToDoItem(toDoObject, container){
    const toDoSection = document.createElement('div');
    toDoSection.classList.add('toDoSection');
    toDoSection.dataset.title = toDoObject.title;

    toDoSection.classList.remove('borderLeftLow', 'borderLeftMedium', 'borderLeftHigh');

    const priorityClass = `borderLeft${toDoObject.priority}`;
    toDoSection.classList.add(priorityClass);
        

    // const description = document.createElement('p');
    // description.innerText = toDoObject.description;
    // toDoSection.appendChild(description);

    // const notes = document.createElement('p');
    // notes.innerText = toDoObject.notes;
    // toDoSection.appendChild(notes);

    // const priority = document.createElement('p');
    // priority.innerText = `Priority: ${toDoObject.priority}`;
    // toDoSection.appendChild(priority);



    const completedLabel = document.createElement('label');
    const completedCheckbox = document.createElement('input');
    completedCheckbox.type = 'checkbox';
    completedCheckbox.checked = toDoObject.completed;
    if(completedCheckbox.checked) toDoSection.classList.add('toDoCompleted');
    else toDoSection.classList.remove('toDoCompleted');
    // completedLabel.appendChild(completedCheckbox);
    // toDoSection.appendChild(completedLabel);
    toDoSection.appendChild(completedCheckbox);

    const title = document.createElement('h3');
    title.innerText = toDoObject.title;
    title.classList.add('toDoTitle');
    toDoSection.appendChild(title);

    const dueDate = document.createElement('p');
    dueDate.innerText = `Due Date: ${toDoObject.dueDate}`;
    toDoSection.appendChild(dueDate);


    container.appendChild(toDoSection);
}


function renderToDoForProject(project, container){
    project.toDoArray.forEach(toDo => {
        renderToDoItem(toDo, container)
    })
}

export default renderToDoForProject