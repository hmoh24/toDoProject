import './style.css'
import ToDo from "./core/toDo";
import Project from "./core/project";
import { updateProjectSideBar } from './domMethods/updateProjectSidebar';
import renderProjectPage from './domMethods/renderProjectPage';
import renderProjectEditPage from './domMethods/renderProjectEditPage';
import updateProjectOnSubmit from './domMethods/updateProjectOnSubmit';
import renderNewProjectModal from './domMethods/renderNewProjectModal';
import getNewProjectFormValues from './domMethods/getNewProjectFormValues';
import renderNewToDoModal from './domMethods/renderNewToDoModal';
import getNewToDoFormValues from './domMethods/getNewToDoFormValues';
//instantiate default project
//create a project array

const defaultProject = new Project('Default', 'Default Project', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.');

const newToDo1 = new ToDo({
  title: "First",
  description: "test",
  dueDate: new Date(),  
  priority: "High",
  notes: ""
});
defaultProject.addToDo(newToDo1);

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
    //Switch Project Page
    if (event.target.classList.contains('projectSideButton')){
        const project = Project.filterProjectArrayByTitle(event.target.innerText);
        console.log(project);
        renderProjectPage(project)
    }

    //Add New Project Modal
  if (event.target.classList.contains('addProject')){
    renderNewProjectModal();
  }
})

const body = document.getElementsByTagName('body')[0];
body.addEventListener('click', (event)=> {
  const modalOverlay = document.querySelector('.modalOverlay');
  const modal = document.querySelector('.modalContainer');

  if (event.target.classList.contains('modalOverlay')) {
        event.target.remove();
    }

  //submit new project form
  if(event.target.classList.contains('submitNewProject')){
    console.log('submit')
    const { title, desc, notes } = getNewProjectFormValues();
    const newProject = new Project(title, desc, notes);
    console.log('New project created:', newProject);
    modalOverlay.remove();
    updateProjectSideBar(Project.Projects)
    renderProjectPage(newProject);
  }

  //new to do modal
  if(event.target.classList.contains('addToDo')){
    renderNewToDoModal();
  }

  //submit new to do form
  if(event.target.classList.contains('submitNewToDo')){
    const {title, description, dueDate, priority, notes} = getNewToDoFormValues()
    const newToDo = new ToDo({title, description, dueDate, priority, notes});
    console.log(newToDo)

    const currentProject = Project.filterProjectArrayByTitle(document.querySelector('.projectTitle').innerText);
    currentProject.addToDo(newToDo);
    modalOverlay.remove();
    renderProjectPage(currentProject);
  }
})

