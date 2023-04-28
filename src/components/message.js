import React from "react";

function Message (props) {

    if (props.language==='pt-br'){
        return (
            <div className={`${props.who} message`}>
                {props.portugueseContent}
            </div>
        ) 
    } else {
        return (
            <div className={`${props.who} message`}>
                {props.content}
            </div>
        ) 
    }
    
}

export default Message;