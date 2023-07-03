import "../src/styles/style.css"
import "../src/styles/darkmode.css"
import Card from "./components/Card"
import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import ExtendedCard from "./components/ExtendedCard";
import Choise from "./components/choise";
import Head from "./components/Head";
import $ from "jquery"
import Modal from "./components/Modal";

function App() {
  const [Info, SetInfo] = useState([
    {id: 1, name: "Monday", tasks: [{place: 0}], note:"one time i just wanted to eat"},
    {id: 2,name: "Tuesday", tasks: [{place: 0}], note:""},
    {id: 3,name: "Wednesday", tasks: [{place: 0}], note:""},
    {id: 4,name: "Thursday", tasks: [{place: 0}], note:""},
    {id: 5,name: "Friday", tasks: [{place: 0}], note:""},
    {id: 6,name: "Saturday", tasks: [{place: 0}], note:""},
    {id: 7,name: "Sunday", tasks: [{place: 0}], note:""},
    // task: {text: "", time: "", status: "new", place: 0}
  ])
  const[theme, SetTheme] = useState(false)
  let variable = null
  function changeInfo(id,inf){
    variable = Info[choisenItem.inf]
    variable.tasks.push(inf)
    SetInfo(Info.map(item => item.id != id ? item : variable))
    variable = null
  }
  const [choisenItem, SetChoisenItem] = useState({
    item:"card",
    inf:"",
  })
 let changedItem = null
  function done(id,index,action){
    changedItem = Info[id-1]
    changedItem.tasks[index].status=action
    console.log(changedItem)
    SetInfo(Info.map(item => item.id != id ? item : changedItem))
    changedItem = null
  }
 
  function darkMode(){
    let main = $("body")
    if(theme){
      main.css("background", "rgba(88,88,88, 1.0)") 
    }
    else{
      
      main.css("background", "#FDF5DF") 
    }
}
darkMode()
function changeMode(){
  SetTheme(!theme) 
}



  return (
   <main>
     
    <Head  theme = {theme}changeMode={changeMode}/>
    <Choise theme={theme}  done ={done}changeInfo = {changeInfo}SetInfo = {SetInfo} info = {Info} choisenItem={choisenItem} SetChoisenItem={SetChoisenItem} />
   </main>
  );
}

export default App;
