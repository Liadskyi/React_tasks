function Card(props) {
     
    function new_count(elem){
        let count = 0
        for (let i = 0; i < elem.tasks.length; i++) {
            if(elem.tasks[i].status=="new"){
            count++
            }
        }
        return(count)
    }
    function done_count(elem){
        let count = 0
        for (let i = 0; i < elem.tasks.length; i++) {
            if(elem.tasks[i].status=="done"){
            count++
            }
        }
        return(count)
    }
    console.log(props.theme)
    return ( 
        <div className="card_cont">
            {props.info.map(elem => 
            <div key={elem.id} className={props.theme === false ? "card" : "dark_card"}  onClick={()=>{props.SetChoisenItem({item: "extendedCard",inf:elem.id-1 })}}>
                <p className={props.theme === false ? "title" : "dark_title"}>{elem.name}</p>
                <div className="content">
                    {/* {elem.tasks.map(el => 
                        <div key={el.place}>
                            <p>{done_count()}</p>
                            {console.log(props.info)}
                            {el.place == elem.tasks.length - 6 ?<p>...</p>:""}
                            {
                                el.place > elem.tasks.length - 6 ?
                                <p>{el.status == "new" ? <p className="new">{el.text} {el.time}</p> : el.status=="done" ? <p className="done">{el.text} {el.time}</p>:""
                                }</p>
                                :<p>{}</p>
                            } 
                        </div>)} */}
                    <p className={props.theme === false ? "" : "dark_p"} id="text">you have {new_count(elem)} more {new_count(elem) == 1 ? "task": "tasks"}</p>
                    <p className={props.theme === false ? "" : "dark_p"}>you have done {done_count(elem)} {done_count(elem) == 1 ? "task": "tasks"}</p>
                </div>
            </div>)}
        </div>
    );
}

export default Card;