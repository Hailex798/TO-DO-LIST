import React from "react"

export default function List(props){
    function editClick(e){
        
    }
    const elements = props.todo.map(x =>
        <li>
            <label>
                <input type="checkbox"/>
                {x}
            </label>
            <div className="list--icons">
                <img
                src="../images/edit-icon.png"
                alt="edit-icon"
                onClick={() => editClick(x)}
                />
                <button onClick={() => toRemove(x)}className="btn btn-danger">Delete</button>
            </div>
        </li>
    )
    return (
        <ul className="list">
            {elements}
        </ul>
    )
    function toRemove(item){
        const val7 = props.todo.filter((x) => 
        {return x !== item}
        )
        props.setTodo(val7)
    }
}