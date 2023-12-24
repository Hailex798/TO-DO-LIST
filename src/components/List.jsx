import React from "react"
import editIcon from '/images/edit-icon.png'

export default function List(props){
    function editClick(val){
        props.setInput(val.name)
        // Or just use .find method to find the object 
        props.setToggleSubmit(true)
        props.setEdit(val.id)
        var edit = document.getElementById
    }
    const elements = props.todo.map(x =>
        <li>
            <label>
                <input type="checkbox"/>
                {x.name}
            </label>
            <div className="list--icons">
                <img
                src={editIcon}
                alt="edit-icon"
                onClick={() => editClick(x)}
                />
                <button onClick={() => toRemove(x.id)}className="btn btn-danger">Delete</button>
            </div>
        </li>
    )
    return (
        <ul className="list">
            {elements}
        </ul>
    )
    function toRemove(key){
        const val7 = props.todo.filter((x) => 
        {return x.id !== key}
        )
        props.setTodo(val7)
    }
}