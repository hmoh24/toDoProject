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
import renderDetailedToDoView from './domMethods/renderDetailedToDoView';
import updateToDoOnSubmit from './domMethods/updateToDoOnSubmit';
import { loadFromLocalStorage, updateLocalStorage } from './core/localStorageFuncs';


//date format
const date = new Date()
const options = { weekday: 'long', day: 'numeric', month: 'short', year: '2-digit' };
const formatted = date.toLocaleDateString('en-US', options);
console.log(localStorage.length);
if (localStorage.length === 0){
  //initialise with default project and a few todos, render sidebar+project page and update local storage
}
else {
  loadFromLocalStorage();
  renderProjectPage(Project.Projects[0]);
  updateProjectSideBar(Project.Projects)
}
//Run project update function everytime a new to do is added/deleted same with project

const defaultProject = new Project('Default', 'Default Project', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
console.log(defaultProject);
console.log(Project.Projects[0]);
// localStorage.setItem('projectStore', JSON.stringify(Project.Projects))
// const newToDo1 = new ToDo({
//   title: "First",
//   description: "test",
//   dueDate: formatted,  
//   priority: "High",
//   notes: ""
// });
// defaultProject.addToDo(newToDo1);

// const newToDo2 = new ToDo({
//   title: "Second",
//   description: "test",
//   dueDate: formatted,     
//   priority: "Low",
//   notes: ""
// });
// defaultProject.addToDo(newToDo2);



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
      renderProjectPage(projectObject);
  }

  //Submit Button on Edit Project Page
  if (event.target.classList.contains('submitProjectEdit')){
      const projectTitle = document.getElementsByClassName('projectTitle')[0].innerText;
      const projectObject = Project.filterProjectArrayByTitle(projectTitle);
      updateProjectOnSubmit(projectObject);

      renderProjectPage(projectObject);
  }

  //Delete On Edit Project Page
  if (event.target.classList.contains('deleteProjectButton')){
    if (Project.Projects.length ===1) throw new Error('Cannot Delete Final Project');
    const projectTitle = document.getElementsByClassName('projectTitle')[0].innerText;
    const projectObject = Project.filterProjectArrayByTitle(projectTitle);
    Project.deleteObject(Project.Projects, projectTitle)
    updateProjectSideBar(Project.Projects);
    renderProjectPage(Project.Projects[0]);
  }

  //Open To Do Detailed View
  const toDoContainer = event.target.closest('.toDoSection');
  if (toDoContainer){
    const title = toDoContainer.getAttribute('data-title');
    const projectTitle = document.getElementsByClassName('projectTitle')[0].innerText;
    const projectObject = Project.filterProjectArrayByTitle(projectTitle);
    const toDoObject = Project.filterProjectToDoByTitle(projectObject, title);

    //Ignore open and checkbox action on checkbox input instead
    if (event.target.tagName === 'INPUT'){
      if (event.target.checked) {
        toDoObject.completed = true;
        toDoContainer.classList.add('toDoCompleted')
      }
      else {
        toDoObject.completed = false;
        toDoContainer.classList.remove('toDoCompleted');
      }
      return;
    }
    renderDetailedToDoView(toDoObject);
  }

  //Submit edited To Do
  if (event.target.classList.contains('detailedToDoSubmitButton')){
    const form = document.querySelector('.detailedToDoForm');
    const title = form.getAttribute('toDo');
    const projectTitle = form.getAttribute('project');
    const projectObject = Project.filterProjectArrayByTitle(projectTitle)
    const toDoObject = Project.filterProjectToDoByTitle(projectObject, title);
    updateToDoOnSubmit(toDoObject);
    renderProjectPage(projectObject);
  }

  //Back from To Do Detailed View
  if (event.target.classList.contains('detailedToDoBackButton')){
    const form = document.querySelector('.detailedToDoForm');
    const projectTitle = form.getAttribute('project');
    const projectObject = Project.filterProjectArrayByTitle(projectTitle);
    renderProjectPage(projectObject);
  }

  //Delete To Do
  if (event.target.classList.contains('removeToDo')){
    const form = document.querySelector('.detailedToDoForm');
    const title = form.getAttribute('toDo');
    const projectTitle = form.getAttribute('project');
    const projectObject = Project.filterProjectArrayByTitle(projectTitle)
    Project.deleteObject(projectObject.toDoArray, title);
    renderProjectPage(projectObject);
  }
  
})



const sideBar = document.getElementsByClassName('sidebar')[0];
sideBar.addEventListener('click', (event)=>{
    //Switch Project Page
    if (event.target.classList.contains('projectSideButton')){
        const project = Project.filterProjectArrayByTitle(event.target.innerText);
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

  if (event.target.classList.contains('modalOverlay') || event.target.classList.contains('closeModal')) {
        modalOverlay.remove();
    }

  //submit new project form
  if(event.target.classList.contains('submitNewProject')){
    const { title, desc, notes } = getNewProjectFormValues();
    const newProject = new Project(title, desc, notes);
    modalOverlay.remove();
    updateLocalStorage();
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

    const currentProject = Project.filterProjectArrayByTitle(document.querySelector('.projectTitle').innerText);
    console.log(currentProject)
    currentProject.addToDo(newToDo);
    modalOverlay.remove();
    renderProjectPage(currentProject);
  }

  //Clear local storage data
  if(event.target.classList.contains('clearLocalStorage')){
    localStorage.clear();
    //render project page after updating local storage with default project after confirming that local storage is empty
  }
})

