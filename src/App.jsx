import "./style.css"
import Navbar from "./components/Navbar"
import NewItem from "./components/NewItem"
import List from "./components/List"

export default function App(){
  return(
    <div>
      <Navbar />
      <NewItem />
      <List />
    </div>
  )
}
