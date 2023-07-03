import React, { useState } from 'react';

const Modal = (props) => {
    const [addPost, setAddPost] = useState({
        text: "",
        time: "",
        status: "new",
        place: props.info[props.choisenItem.inf].tasks[props.info[props.choisenItem.inf].tasks.length-1].place + 1
    
       
        
       
    })


  if (!props.isOpen) return null;
 
  return (
    <div className={props.theme === false ? 'modal' : "dark_modal"}>
                    <div>
                        <h2>add new task</h2>
                        <div className='modalInputCont'>
                            <textarea className='modalTextarea' onChange={e => {setAddPost({...addPost, text: e.target.value})}}/>
                            <input type="time" className={"time"}onChange={e => {setAddPost({...addPost, time: e.target.value})}}/>
                        </div>
                        <div className='ModalBtnCont'>
                            <div className={props.theme === false ? 'btn add' : "dark_btn"} onClick={()=>{
                                
                                setAddPost({...addPost, place: props.info[props.choisenItem.inf].tasks.length+1})
                                
                                setTimeout(()=>(props.changeInfo(props.info[props.choisenItem.inf].id, addPost)), 1)}}
                            >
                                add
                            </div>
                            <div className={props.theme === false ? 'btn close' : "dark_btn dark_close"} onClick={props.onClose}>close</div>
                        </div>
                    </div>
      
    </div>
  );
}
export default Modal