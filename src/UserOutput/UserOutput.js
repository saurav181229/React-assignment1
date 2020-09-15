import React from 'react'
import './UserOutput.css'
const UserOutput = (props)=>{
    return(
        <div class="UserOutput">
            <p>username: {props.userName}</p>
            <p>some more text</p>
        </div>

    )
}
export default UserOutput