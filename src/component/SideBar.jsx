import AddButton from "./addButton";

export default function SideBar({onStartAddProject, projects}){
    return(
        <section className="w-1/3 px-8 py-16 bg-black md:w-72 rounded-r-xl">
            
            <h1 className="py-8 text-2xl text-white">YOUR PROJECTS</h1>
            <AddButton onClick={onStartAddProject}>+Add Project</AddButton>
            <ul className="mt-10 text-slate-400 flex flex-col gap-3 ">
                {projects.map(project => <li key={project.id} className="hover:text-white hover:bg-slate-700 rounded-md px-3"><button>{project.title}</button></li>)}
            </ul>
        </section>
    )
}