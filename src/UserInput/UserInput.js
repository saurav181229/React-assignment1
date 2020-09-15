import React from 'react';
 
const UserInput = (props)=>{
    const userStyle = {
        border:'2px solid red'
    }
    return <input style={userStyle} type="text" value={props.value} onChange={props.changed} />
}

export default UserInput