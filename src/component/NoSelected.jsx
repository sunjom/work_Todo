import Noimg from '../assets/no-projects.png';
import AddButton from './addButton';
export default function NoSelected({onStartAddProject}){
    return(
        <div className='flex flex-col gap-5 mt-28 items-center w-2/3'>
            <img className="w-16 h-16 object-contain mx-auto" src={Noimg}/>
            <p className='font-bold text-xl'>No Project Selected</p>
            <p>Select a project or get startedwith a new one</p>
            <AddButton onClick={onStartAddProject}>Create new project</AddButton>
        </div>
        
    )
}