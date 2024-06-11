import { useRef } from "react";
import Input from "./Input";

export default function Button({onAdd}){
    const title = useRef(); // submit 할 때 정보를 확인하기 위해 useRef를 사용.
    const description = useRef();
    const Date = useRef();

    function handleSave(){
        const enteredTitle = title.current.value
        const enteredDescription = description.current.value
        const enteredDate = Date.current.value
        
        if(enteredTitle.trim() ==='' || enteredDescription ==='' || enteredDate ===''){
            
        }
        onAdd({
            title:enteredTitle,
            description:enteredDescription,
            date:enteredDate
        });
    }
    return(
        <div className="w-[35rem] mt-28">
        <menu className="flex justify-end items-center gap-4 my-4">
            <li><button className=" text-stone-800 hover:text-stone-950">Cancel</button></li>
            <li><button className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
            onClick={handleSave}>Save</button></li>
        </menu>
        <div>
            <Input ref={title} label="Title" />
            <Input ref={description} label="Description" isTextarea/>
            <Input ref={Date} label="Due Date" type="date"/>
        </div>
        </div>
    )
    //Input태그에서 ref 매개변수를 받기 위해 forwardRef를 사용후, 두번째 매개변수로 주면 된다. 
}