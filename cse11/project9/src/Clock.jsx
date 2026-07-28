import React from "react";
function Clock(props){
    const time = new Date().toLocaleTimeString();
    return(
        <div>
            <h2 style={{ color: props.color }}>
            Current Time: {time}
            </h2>

        </div>
    );
}
export default Clock;

