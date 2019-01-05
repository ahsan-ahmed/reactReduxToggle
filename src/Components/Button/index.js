import React from 'react';
const Button = (props) =>
        <div>
            <button style={{ height: 40, width: 200, cursor: "pointer", marginTop: 100 }}
                onClick={()=>{props.changeText()}}>
                <b>CLick here. To Change Text in below !!!</b></button>
        </div>
        
export default Button;