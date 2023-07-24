import React from "react"

export default function List(props){
    const elements = props.todo.map(x =>
        <li>
            <label>
                <input type="checkbox"/>
                {x}
            </label>
            <button onClick={() => toRemove(x)}className="btn btn-danger">Delete</button>
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