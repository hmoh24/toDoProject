function renderToDoItem(toDoObject, container){
    const toDoSection = document.createElement('div');
    toDoSection.classList.add('toDoSection');
    toDoSection.dataset.title = toDoObject.title;

    toDoSection.classList.remove('borderLeftLow', 'borderLeftMedium', 'borderLeftHigh');

    const priorityClass = `borderLeft${toDoObject.priority}`;
    toDoSection.classList.add(priorityClass);

    const completedLabel = document.createElement('label');
    const completedCheckbox = document.createElement('input');
    completedCheckbox.type = 'checkbox';
    completedCheckbox.checked = toDoObject.completed;
    if(completedCheckbox.checked) toDoSection.classList.add('toDoCompleted');
    else toDoSection.classList.remove('toDoCompleted');
    toDoSection.appendChild(completedCheckbox);

    const title = document.createElement('h3');
    title.innerText = toDoObject.title;
    title.classList.add('toDoTitle');
    toDoSection.appendChild(title);

    const dueDate = document.createElement('p');
    const options = { weekday: 'long', day: 'numeric', month: 'short', year: '2-digit' };
    const displayDate = new Date(toDoObject.dueDate).toLocaleDateString('en-US', options);
    dueDate.innerText = `Due Date: ${displayDate}`;
    toDoSection.appendChild(dueDate);


    container.appendChild(toDoSection);
}


function renderToDoForProject(project, container){
    project.toDoArray.forEach(toDo => {
        renderToDoItem(toDo, container)
    })
}

export default renderToDoForProject