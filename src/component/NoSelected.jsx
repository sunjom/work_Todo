import Noimg from '../assets/no-projects.png';
export default function NoSelected(){
    return(
        <div className='flex flex-col gap-5 mt-28 text-center w-2/3'>
            <img className="w-16 h-16 object-contain mx-auto" src={Noimg}/>
            <p className='font-bold text-xl'>No Project Selected</p>
            <p>Select a project or get startedwith a new one</p>
            <button className='bg-stone-700'>Create new project</button>
        </div>
        
    )
}