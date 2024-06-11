import { useState } from "react";
import SideBar from "./component/SideBar";
import Button from "./component/Button";
import NoSelected from "./component/NoSelected";
import Details from "./component/details";

function App() {
  const [project , setProject] = useState({ // button 선택 유무에 따라 페이지를 보여주기 위한 상태 설정
    selectedProject: undefined, // undefined => 선택안함. null => 선택함으로 지정.
    projects: [] // 여태까지 입력한 프로젝트들 
  });

  function handleStartAddProject(){
    setProject((prevState) => {
      return {
        ...prevState, // 상태들을 전부 불러옴
        selectedProject: null, // selectedProject만 값 바꿈.
      };
    })
  }
  function handleProject(projectData){
    setProject((prevState) =>{
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };

      return {
        ...prevState,
        selectedProject: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }


  let content;

  if(project.selectedProject ===null){
    content = <Button onAdd={handleProject}/>
  }else if(project.selectedProject ===undefined){
    content = <NoSelected onStartAddProject={handleStartAddProject}/>
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar onStartAddProject={handleStartAddProject} projects={project.projects}></SideBar>
      {content}
    </main>
  );
}

export default App;
