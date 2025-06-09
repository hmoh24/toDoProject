function updateProjectOnSubmit(project) {
    const titleInput = document.querySelector('.editProjectTitle');
    const descInput = document.querySelector('.editProjectDesc');
    const notesInput = document.querySelector('.editProjectNotes');

    project.title = titleInput.value.trim();
    project.desc = descInput.value.trim();
    project.notes = notesInput.value.trim();
}

export default updateProjectOnSubmit;