import Card from "./Card";
import ExtendedCard from "./ExtendedCard";

function Choise(props) {
    if(props.choisenItem.item == "card"){
        return (<Card theme = {props.theme} darkMode={props.darkMode} info={props.info} SetChoisenItem={props.SetChoisenItem}/>);
    }
    else if(props.choisenItem.item == "extendedCard"){
        return (<ExtendedCard theme = {props.theme} darkMode={props.darkMode} done={props.done} changeInfo = {props.changeInfo} info = {props.info} choisenItem = {props.choisenItem}SetChoisenItem={props.SetChoisenItem}/>);
    }
}

export default Choise;