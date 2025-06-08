function updateProjectSideBar(projectArray){
    const sideBar = document.getElementsByClassName('sidebar')[0];
    console.log(sideBar)
    projectArray.forEach(project => {
        const projectElement = document.createElement('button');
        projectElement.innerText=project.title;
        sideBar.append(projectElement);
    })
}

export {updateProjectSideBar}