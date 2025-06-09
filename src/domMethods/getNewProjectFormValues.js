function getNewProjectFormValues() {
    const titleInput = document.querySelector('.newProjectTitle');
    const descInput = document.querySelector('.newProjectDesc');
    const notesInput = document.querySelector('.newProjectNotes');

    const projectData = {
        title: titleInput.value.trim(),
        desc: descInput.value.trim(),
        notes: notesInput.value.trim()
    };

    return projectData;
}

export default getNewProjectFormValues;