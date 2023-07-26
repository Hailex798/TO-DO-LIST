import React from "react"

export default function NewItem(props){
    function handleSubmit(e){
        e.preventDefault()
        if(props.input === ""){
            alert("Please Add a Task")
        }
        else if(props.input && props.toggleSubmit){
            const inputData = props.todo.map((ele) =>{
                if(props.edit === ele.id){
                    return {...ele, name: props.input}
                }
                return ele
            })
            props.setTodo(inputData)
        }
        else{
            const inputData = {name: props.input, id: new Date().getTime().toString()}
            props.setTodo(prev => {
                return [
                    ...prev,
                    inputData
                ]
            })
        }
        props.setInput("")
        props.setToggleSubmit(prev => {
            if(prev) return false;
        })
    }
    function handleChange(e){
        props.setInput(e.target.value)
    }
    
    return (
        <form className="new-item-form" onSubmit={handleSubmit}>
            <div className="form-row">
                <label htmlFor="item">Add a Task</label>
                <input
                type="text"
                id="item"
                value={props.input}
                onChange={handleChange} />
            </div>
            <button className="btn">{props.toggleSubmit ? "Edit" : "Add"}</button>
        </form>
    )
}