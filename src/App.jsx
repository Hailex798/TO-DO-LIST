import React from "react"
import "./style.css";
import Navbar from "./components/Navbar";
import NewItem from "./components/NewItem";
import List from "./components/List";

export default function App() {
  const [list, setList] = React.useState([]);
  // () => JSON.parse(localStorage.getItem("list")) 
  const [input, setInput] = React.useState("");
  const [toggleSubmit, setToggleSubmit] = React.useState(false)
  const [edit, setEdit] = React.useState(null)

  // Save Data Locally (Browser Storage)
//   React.useEffect(() => {
//     localStorage.setItem("notes", JSON.stringify(list))
// }, [list])

  return (
    <div>
      <Navbar />
      <NewItem
      todo={list}
      setTodo={setList}
      input={input}
      setInput={setInput} 
      toggleSubmit={toggleSubmit}
      setToggleSubmit={setToggleSubmit}
      edit={edit}
      />
      <List
      todo={list}
      setTodo={setList} 
      input={input}
      setInput={setInput} 
      setToggleSubmit={setToggleSubmit}
      setEdit={setEdit}
      />
    </div>
  );
}
