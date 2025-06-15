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
const date = new Date();
const isoFormatted = date.toISOString().split('T')[0]; // "2025-06-10"

if (localStorage.length === 0){
  //initialise with default project and a few todos, render sidebar+project page and update local storage
  const defaultProject = new Project(
    'Getting Started',
    'Your First To-Do Project',
    'This is a sample project to help you explore how to organize tasks and manage your productivity. Edit this project to make it your own, or create a brand new one and delete this after (must have at least 1 Project)! Click on To-Dos to see more details.'
  );
  const newToDo1 = new ToDo({
    title: "Explore the To-Do List",
    description: "Click around the app to see how tasks, projects, and priorities work together.",
    dueDate: isoFormatted,  
    priority: "Low",
    notes: "You can update or remove this task at any time."
  });
  defaultProject.addToDo(newToDo1);

  const newToDo2 = new ToDo({
    title: "Add Your First Custom Task",
    description: "Try creating a new task that's actually relevant to your life or work.",
    dueDate: isoFormatted,  
    priority: "Medium",
    notes: "Example: 'Call mom', 'Finish report', 'Go for a run'."
  });
  defaultProject.addToDo(newToDo2);

  const newToDo3 = new ToDo({
    title: "Try Changing Task Priorities",
    description: "You can set tasks to Low, Medium, or High priority to stay organized.",
    dueDate: isoFormatted,  
    priority: "Low",
    notes: "Consider marking urgent tasks as High priority."
  });
  defaultProject.addToDo(newToDo3);

  const newToDo4 = new ToDo({
    title: "Complete a Task",
    description: "Check the box next to any task to mark it as done. It will stay visible until you delete it.",
    dueDate: isoFormatted,  
    priority: "Low",
    notes: "You can also delete completed tasks to keep your list clean."
  });
  defaultProject.addToDo(newToDo4);

  const newToDo5 = new ToDo({
    title: "Create a New Project",
    description: "Organize your tasks by creating a new project, like 'Work', 'Personal', or 'Shopping List'.",
    dueDate: isoFormatted,  
    priority: "Medium",
    notes: "Projects help keep your tasks from different areas of life separate and manageable."
  });
  defaultProject.addToDo(newToDo5);
  updateLocalStorage();
  renderProjectPage(Project.Projects[0]);
  updateProjectSideBar(Project.Projects)
}
else {
  loadFromLocalStorage();
  renderProjectPage(Project.Projects[0]);
  updateProjectSideBar(Project.Projects)
}

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
      const form = document.querySelector('form')
      if (form.checkValidity()) {
      updateProjectOnSubmit(projectObject);
      updateLocalStorage();
      renderProjectPage(projectObject);
    } else {
      form.reportValidity();
    }
  }

  //Delete On Edit Project Page
  if (event.target.classList.contains('deleteProjectButton')) {
  try {
    if (Project.Projects.length === 1) throw new Error('Cannot Delete Final Project');
    const projectTitle = document.getElementsByClassName('projectTitle')[0].innerText;
    const projectObject = Project.filterProjectArrayByTitle(projectTitle);
    Project.deleteObject(Project.Projects, projectTitle);
    updateLocalStorage();
    updateProjectSideBar(Project.Projects);
    renderProjectPage(Project.Projects[0]);
  } catch (error) {
    alert(error.message);
  }
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
        toDoContainer.classList.add('toDoCompleted');
        updateLocalStorage();
      }
      else {
        toDoObject.completed = false;
        toDoContainer.classList.remove('toDoCompleted');
        updateLocalStorage();
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
    console.log(form.checkValidity());
    if(form.checkValidity()){
      updateToDoOnSubmit(toDoObject);
      updateLocalStorage();
      renderProjectPage(projectObject);
    }
    else{
      form.reportValidity();
      return;
    }
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
    updateLocalStorage();
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
    const form = document.querySelector('form');
    if(form.checkValidity()){
      updateProjectSideBar(Project.Projects)
      updateLocalStorage();
      renderProjectPage(newProject);
      modalOverlay.remove();
    }
    else{
      form.reportValidity();
      return;
    }
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
    currentProject.addToDo(newToDo);
    const form = document.querySelector('form');
    if(form.checkValidity()){
      updateLocalStorage();   
      renderProjectPage(currentProject);
      modalOverlay.remove();
    }
    else{
      form.reportValidity();
      return;
    }
  }

  //Clear local storage data
  if(event.target.classList.contains('clearLocalStorage')){
    localStorage.clear();
    location.reload();
    //render project page after updating local storage with default project after confirming that local storage is empty
  }
})

