import Modal from 'react-modal';
import React from 'react';
import { useState } from 'react';
import $ from "jquery"


function ModalComp(props) {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
    setModalIsOpen(true);
    };

    const closeModal = () => {
    setModalIsOpen(false);
    };
    const [addPost, setAddPost] = useState({
        text: "",
        time: "",
        status: "new",
        place: props.info[props.choisenItem.inf].tasks[props.info[props.choisenItem.inf].tasks.length-1].place + 1
    
       
       
       
    })
    setTimeout(()=>{
        $(".ReactModal__Overlay").css("background-color", "rgba(255, 255, 255, 0.)")
    },) 
    return (<div>
       
        <Modal className='modal'  isOpen={modalIsOpen} onRequestClose={closeModal} ariaHideApp={false}>
                
                
                    <div>
                        <h2>add new task</h2>
                        <div className='modalInputCont'>
                            <textarea className='modalTextarea' onChange={e => {setAddPost({...addPost, text: e.target.value})}}/>
                            <input type="time" className={"time"}onChange={e => {setAddPost({...addPost, time: e.target.value})}}/>
                        </div>
                        <div className='ModalBtnCont'>
                            <div className='btn add' onClick={()=>{
                                
                                setAddPost({...addPost, place: props.info[props.choisenItem.inf].tasks.length+1})
                                
                                setTimeout(()=>(props.changeInfo(props.info[props.choisenItem.inf].id, addPost)), 1)}}
                            >
                                add
                            </div>
                            <div className='btn close'onClick={closeModal}>close</div>
                        </div>
                    </div>
                
            </Modal>
            <div className='btnCont'>
            <div className={props.theme === false ? 'openModal' : "dark_openModal"} onClick={openModal} >add new task</div>
            </div>
    </div>);
}

export default ModalComp