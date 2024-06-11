import Input from "./Input";

export default function Button(){
    return(
        <div className="w-[35rem] mt-28">
        <menu className="flex justify-end items-center gap-4 my-4">
            <li><button className=" text-stone-800 hover:text-stone-950">Cancel</button></li>
            <li><button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button></li>
        </menu>
        <div>
            <Input label="Title" />
            <Input label="Description" isTextarea/>
            <Input label="Due Date" type="date"/>
        </div>
        </div>
    )
}