function updateToDoOnSubmit(toDoObject) {
    const titleInput = document.querySelector('.detailedToDoTitleInput');
    const descriptionInput = document.querySelector('.detailedToDoDescriptionInput');
    const dueDateInput = document.querySelector('.detailedToDoDueDateInput');
    const priorityInput = document.querySelector('.detailedToDoPriorityInput');
    const notesInput = document.querySelector('.detailedToDoNotesInput');
    const completedInput = document.querySelector('.detailedToDoCompletedInput');

    toDoObject.title = titleInput.value.trim();
    toDoObject.description = descriptionInput.value.trim();
    toDoObject.dueDate = dueDateInput.value;
    toDoObject.priority = priorityInput.value;
    toDoObject.notes = notesInput.value.trim();
    toDoObject.completed = completedInput.checked;
}

export default updateToDoOnSubmit;
