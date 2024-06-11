export default function AddPage(){
    return(
        <section>
            <div>
                <button>Cancel</button>
                <button>Save</button>
            </div>
            <div>
                <h3>TITLE</h3>
                <input type="text"/>
            </div>
            <div>
                <h3>DESCRIPTION</h3>
                <input type="text"/>
            </div>
            <div>
                <h3>DUE DATE</h3>
                <input type="date"/>
            </div>
        </section>
    )
}