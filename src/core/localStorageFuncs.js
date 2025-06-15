import Project from "./project";
import ToDo from "./toDo";

//objects require rehydration since JSON does not store functions, so we set the prototype object to correct one
//No methods are used on todo objects, so technically rehydration is not necessary at the moment, but we will to keep code flexible for future needs
function rehydrateProjects(localStorageData){
    console.log(localStorageData);
    localStorageData.forEach(object =>{
        if(Object.getPrototypeOf(object)===Object.prototype){
            Object.setPrototypeOf(object, Project.prototype)
            object.toDoArray.forEach(todo => {
                if(Object.getPrototypeOf(todo)===Object.prototype)
                    Object.setPrototypeOf(todo, ToDo.prototype)
            })
        }
    })

}

function loadFromLocalStorage(){
    if(localStorage.length > 0){
        const localStorageProjectData = JSON.parse(localStorage.projects);
        rehydrateProjects(localStorageProjectData)
        Project.Projects = localStorageProjectData
    }
    else throw new Error('Local Storage is empty')
}

function updateLocalStorage(){
    console.log('updating')
    const projectArrayJSONString = JSON.stringify(Project.Projects);
    localStorage.setItem('projects', projectArrayJSONString);
}

export {loadFromLocalStorage, updateLocalStorage};