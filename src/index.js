import ToDo from "./toDo";
import Project from "./project";

//instantiate default project
//create a project array

const defaultProject = new Project('Default', 'Default Project', '');
Project.addNewProject(defaultProject);
console.log(Project.Projects)

const newToDo = new ToDo({
  title: "First",
  description: "test",
  dueDate: new Date(),      // or any valid date string
  priority: "High",
  notes: ""
});
defaultProject.addToDo(newToDo);

const newToDo2 = new ToDo({
  title: "Second",
  description: "test",
  dueDate: new Date(),      // or any valid date string
  priority: "High",
  notes: ""
});
defaultProject.addToDo(newToDo2);
defaultProject.removeToDo(newToDo);
console.log(defaultProject.toDoArray)


//test creation of todo, linking it to a project, displaying all to dos per project
//then simple UI
//then add needed functions for that UI
//then test UI
//then beautify UI
