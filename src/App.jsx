import { useState } from "react";
import ProjectsideBar from "./component/ProjectsideBar";
import NoList from "./component/NoList";
function App() {
  const [project , setProject] = useState([]);

  return (
    <main className="h-screen my-8">
      <ProjectsideBar project={project}/>
      <NoList project={project}/>
    </main>
  );
}

export default App;
