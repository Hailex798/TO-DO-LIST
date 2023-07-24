import React from "react"
import "./style.css";
import Navbar from "./components/Navbar";
import NewItem from "./components/NewItem";
import List from "./components/List";

export default function App() {
  const [list, setList] = React.useState([]);

  return (
    <div>
      <Navbar />
      <NewItem setTodo={setList}/>
      <List todo={list} setTodo={setList}/>
    </div>
  );
}
