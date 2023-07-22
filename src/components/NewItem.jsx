export default function NewItem(){
    return (
        <form className="new-item-form">
            <div className="form-row">
                <label htmlFor="item">Add a Task</label>
                <input type="text" id="item"></input>
            </div>
            <button className="btn">Add</button>
        </form>
    )
}