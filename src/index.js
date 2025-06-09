import './style.css'
import ToDo from "./core/toDo";
import Project from "./core/project";
import { updateProjectSideBar } from './domMethods/updateProjectSidebar';
import renderProjectPage from './domMethods/renderProjectPage';
import renderProjectEditPage from './domMethods/renderProjectEditPage';
import updateProjectOnSubmit from './domMethods/updateProjectOnSubmit';
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

const main = document.getElementsByTagName('main')[0];
main.addEventListener('click', (event) => {



  //Edit Project Button
  if (event.target.classList.contains('editProject')){
      const projectTitle = document.getElementsByClassName('projectTitle')[0].innerText;
      const projectObject = Project.filterProjectArrayByTitle(projectTitle);
      renderProjectEditPage(projectObject);
  }

  //Back to Project Page on Edit Project Page
  if (event.target.classList.contains('backToProjectPage')){
      const projectTitle = document.getElementsByClassName('projectTitle')[0].innerText;
      const projectObject = Project.filterProjectArrayByTitle(projectTitle);
      console.log(projectObject)
      renderProjectPage(projectObject);
  }

    //Submit Button on Edit Project Page
  if (event.target.classList.contains('submitProjectEdit')){
      console.log('submitted');
      const projectTitle = document.getElementsByClassName('projectTitle')[0].innerText;
      const projectObject = Project.filterProjectArrayByTitle(projectTitle);
      updateProjectOnSubmit(projectObject);
            console.log(projectObject)

      renderProjectPage(projectObject);
  }
  
})



const sideBar = document.getElementsByClassName('sidebar')[0];
sideBar.addEventListener('click', (event)=>{
    if (event.target.className === 'projectSideButton'){
        const project = Project.filterProjectArrayByTitle(event.target.innerText);
        console.log(project);
        renderProjectPage(project)
    }
})


