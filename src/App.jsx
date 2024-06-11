import { useState } from "react";
import SideBar from "./component/SideBar";
import Button from "./component/Button";
import NoSelected from "./component/NoSelected";

function App() {
  const [project , setProject] = useState([]);

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar></SideBar>
      <NoSelected></NoSelected>
    </main>
  );
}

export default App;
