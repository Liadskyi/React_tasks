import React from 'react';
import $ from 'jquery';

function Head(props) {
    
    function animFn(){
        if(props.theme){
            
            $(".darkMode").css("animation-name", "animToLight")
            setTimeout(()=>{$(".darkMode").text("dark_mode")}, 250)
            
        }
        else{
            
               
                $(".darkMode").css("animation-name", "animToDark")
                setTimeout(()=>{$(".darkMode").text("light_mode")}, 250)
        }
        
    }
    
    
   
    return (
        <div className="head">
            <span onClick={()=>{props.changeMode(); animFn()}} 
            className="material-symbols-outlined darkMode">dark_mode</span>
        </div>
    );
}

export default Head;