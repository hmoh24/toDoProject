//add validator in constructor

class Project{
    static Projects = [];

    constructor(title, desc, notes, toDoArray = []){
        this.title = title;
        this.desc = desc;
        this.notes = notes;
        this.toDoArray = toDoArray;
    }

    addToDo(toDoObject){
        this.toDoArray.push(toDoObject);
    }

    removeToDo(toDoObject){
        this.toDoArray.forEach((item, index) => {
        if (item === toDoObject) {
            this.toDoArray.splice(index, 1)}
        })
    }

    static addNewProject(projectObject){
        this.Projects.push(projectObject);
    }
}

export default Project