import React from "react";

function Message (props) {

    return (
        <div className={`${props.who} message`}>
            {props.content}
        </div>
    ) 
}

export default Message;