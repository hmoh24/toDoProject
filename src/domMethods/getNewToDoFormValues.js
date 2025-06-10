function getNewToDoFormValues() {
    const titleInput = document.querySelector('.newToDoTitle');
    const descInput = document.querySelector('.newToDoDesc');
    const notesInput = document.querySelector('.newToDoNotes');
    const dateInput = document.querySelector('.newToDoDate');
    const priorityInput = document.querySelector('.newToDoPriority');

    const toDoData = {
        title: titleInput.value.trim(),
        description: descInput.value.trim(),
        dueDate: dateInput.value.trim(),
        priority: priorityInput.value.trim(),
        notes: notesInput.value.trim()
    };

    return toDoData;
}

export default getNewToDoFormValues;