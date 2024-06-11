export default function Details(){
    return(
        <div className="flex flex-col gap-3 mt-28 w-[35rem]">
            <div className="flex justify-between">
                <h1 className="text-3xl">Test</h1>
                <button>Delete</button>
            </div>
            <p>date</p>
            <p>description</p>
            <hr className="border-2 border-gray-300"></hr>
            <h1>Tasks</h1>
            <div className="flex gap-5 mb-5">
                <input className="bg-slate-300 w-52"/>
                <p>Add Task</p>
            </div>
            <p>Task not yet</p>
            <ul className="bg-slate-300 py-3">
                <li className="flex justify-between px-3"><p>asd</p> <button>clear</button></li>
                <li className="flex justify-between px-3"><p>asd</p> <button>clear</button></li>
            </ul>
        </div>
    )
}