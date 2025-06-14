//add validator in constructor

class Project{
    static Projects = [];
    static ProjectLimit = 8;

    constructor(title, desc, notes, toDoArray = []){
        try{
            Project.errorOnMaxProjects()
        }
        catch(error){
            alert(error.message);
        }
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

    static filterProjectArrayByTitle(title){
        let obj;
        Project.Projects.filter(projectObject => {
            if (projectObject.title === title){
                obj = projectObject
            }
        })
        return obj
    }

    static filterProjectToDoByTitle(project, title){
        let obj;
        project.toDoArray.filter(toDo => {
            if (toDo.title === title){
                obj = toDo;
            }
        })
        return obj;
    }

    static deleteObject(array, objectTitle) {
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i].title === objectTitle) {
            array.splice(i, 1); 
        }
    }
}

}

export default Project