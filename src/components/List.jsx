import React from "react"

export default function List(){
    const [list, setList] = React.useState([])

    return (
        <ul className="list">
            <li>
                <label>
                    <input type="checkbox"/>
                    Create React Project
                </label>
                <button className="btn btn-danger">Delete</button>
            </li>
        </ul>
    )
}