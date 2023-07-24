import React from "react"

export default function NewItem(props){
    const [input, setInput] = React.useState("")
    function handleSubmit(e){
        e.preventDefault()
        if(input !== ""){
            props.setTodo(prev => {
                return [
                    ...prev,
                    input
                ]
            })
        }
        setInput("")
    }
    function handleChange(e){
        setInput(e.target.value)
    }
    
    return (
        <form className="new-item-form" onSubmit={handleSubmit}>
            <div className="form-row">
                <label htmlFor="item">Add a Task</label>
                <input
                type="text"
                id="item"
                value={input}
                onChange={handleChange} />
            </div>
            <button className="btn">Add</button>
        </form>
    )
}