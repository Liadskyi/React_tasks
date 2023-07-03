import Modal from './Modal';
import React from 'react';
import { useState } from 'react';


function ExtendedCard(props) {
  
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    return (<div className='extendedCard'>
        <div className='header_cont'>
            <span className={props.theme === false ? "material-symbols-outlined back" : "material-symbols-outlined dark_back"} onClick={()=>{props.SetChoisenItem({item: "card"})}}>arrow_back</span>
            <p className={props.theme === false ? "bigName": "dark_bigName"}> {props.info[props.choisenItem.inf].name}</p>
            <div></div>
        </div>
        <div className="bigTaskCont">{props.info[props.choisenItem.inf].tasks.map(elem => 
            <div className="bigTask" key={elem.place}>
            {/* tasks.indexOf(elem) */}
                { elem.status == "new" ? 
                <div > 
                    <p className={props.theme === false ? 'new' : "dark_new"}  onClick={()=>{props.done(props.info[props.choisenItem.inf].id ,props.info[props.choisenItem.inf].tasks.indexOf(elem), "done")}}>{elem.text} {elem.time}</p>
                    <div className={props.theme === false ? "material-symbols-outlined bin" : "material-symbols-outlined dark_bin"} onClick={()=>{props.done(props.info[props.choisenItem.inf].id ,props.info[props.choisenItem.inf].tasks.indexOf(elem), "del")}}>delete</div>
                </div>
                : elem.status == "done" ? 
                <div > 
                    <p className={props.theme === false ? 'done' : "dark_done"}  onClick={()=>{props.done(props.info[props.choisenItem.inf].id ,props.info[props.choisenItem.inf].tasks.indexOf(elem), "new")}}>{elem.text} {elem.time}</p>
                    <div className="material-symbols-outlined done_bin bin" onClick={()=>{props.done(props.info[props.choisenItem.inf].id ,props.info[props.choisenItem.inf].tasks.indexOf(elem), "del")}}>delete</div>
                </div>
                :  
                ""}
                
                
            </div>)}
            {/* <p>{props.info[props.choisenItem.inf].note}</p> */}
            
            
        </div>

        
      <div className='modalOpenCont'><div className={props.theme === false ? 'openModal' : 'dark_openModal'} onClick={handleOpen}>add task</div></div>
      <Modal theme={props.theme} info={props.info} changeInfo={props.changeInfo} choisenItem={props.choisenItem} isOpen={isOpen} onClose={handleClose}/>
    
        {/* <ModalComp theme={props.theme} info={props.info} changeInfo={props.changeInfo} choisenItem={props.choisenItem}/> */}
      
    
        
    
  </div>
    );
}

export default ExtendedCard;