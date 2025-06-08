import './style.css'
import ToDo from "./toDo";
import Project from "./project";
import { updateProjectSideBar } from './domMethods/updateProjectSidebar';
import renderProjectPage from './domMethods/renderProjectPage';

//instantiate default project
//create a project array

const defaultProject = new Project('Default', 'Default Project', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.');

const newToDo = new ToDo({
  title: "First",
  description: "test",
  dueDate: new Date(),  
  priority: "High",
  notes: ""
});
defaultProject.addToDo(newToDo);

const newToDo2 = new ToDo({
  title: "Second",
  description: "test",
  dueDate: new Date(),     
  priority: "High",
  notes: ""
});
defaultProject.addToDo(newToDo2);
console.log(defaultProject.toDoArray);
renderProjectPage(defaultProject);


const workProject = new Project('work', 'employment related tasks', '');

updateProjectSideBar(Project.Projects);
//test creation of todo, linking it to a project, displaying all to dos per project
//then simple UI
//then add needed functions for that UI
//then test UI
//then beautify UI
