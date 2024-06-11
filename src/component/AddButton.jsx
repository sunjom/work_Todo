export default function AddButton({children, ...props}){
    return(
        <button className="bg-neutral-700 px-4 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-neutral-600" {...props}>
            {children}
            </button>
    )
}