function renderDetailedToDoView(toDoObject) {
    const main = document.getElementsByTagName('main')[0];
    main.innerHTML = ''; // Clear the current page

    const title = document.createElement('h1');
    title.classList.add('detailedToDoTitle'); // Unique class name
    title.innerText = toDoObject.title;
    main.appendChild(title);

    const description = document.createElement('p');
    description.innerText = `Description: ${toDoObject.description}`;
    main.appendChild(description);

    const dueDate = document.createElement('p');
    dueDate.innerText = `Due Date: ${toDoObject.dueDate}`;
    main.appendChild(dueDate);

    const priority = document.createElement('p');
    priority.innerText = `Priority: ${toDoObject.priority}`;
    main.appendChild(priority);

    const notes = document.createElement('p');
    notes.innerText = `Notes: ${toDoObject.notes}`;
    main.appendChild(notes);

    const completedStatus = document.createElement('p');
    completedStatus.innerText = `Completed: ${toDoObject.completed ? 'Yes' : 'No'}`;
    main.appendChild(completedStatus);

    const editToDoButton = document.createElement('button');
    editToDoButton.classList.add('editToDo');
    editToDoButton.innerText = 'Edit To-Do';
    main.appendChild(editToDoButton);

    const backButton = document.createElement('button');
    backButton.type = 'button';
    backButton.classList.add('detailedToDoBackButton');
    backButton.innerText = 'Back';
    main.appendChild(backButton)

    const removeToDoButton = document.createElement('button');
    removeToDoButton.classList.add('removeToDo');
    removeToDoButton.innerText = 'Remove To-Do';
    main.appendChild(removeToDoButton);
}

export default renderDetailedToDoView;
