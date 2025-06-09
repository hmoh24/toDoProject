function updateProjectSideBar(projectArray){
    const sideBar = document.getElementsByClassName('sidebar')[0];
    const projectSideBarButtons = document.getElementsByClassName('projectSideButton');
    Array.from(projectSideBarButtons).forEach(element => element.remove());
    projectArray.forEach(project => {
        const projectElement = document.createElement('button');
        projectElement.innerText=project.title;
        projectElement.className='projectSideButton'
        sideBar.append(projectElement);
    })
}

export {updateProjectSideBar}