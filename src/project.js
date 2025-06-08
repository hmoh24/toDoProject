//add validator in constructor

class Project{
    static Projects = [];
    static ProjectLimit = 8;

    constructor(title, desc, notes, toDoArray = []){
        Project.errorOnMaxProjects()
        this.title = title;
        this.desc = desc;
        this.notes = notes;
        this.toDoArray = toDoArray;
        Project.Projects.push(this);
    }

    static errorOnMaxProjects(){
        if (Project.length === this.ProjectLimit){
            throw new Error(`Max Limit of Projects: ${ProjectLimit}`)
        }
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