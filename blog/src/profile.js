import { useState } from "react"
function Profile()
{
    const [login,setLogin]=useState()
        return(
            <div className="Profile">
                {
                    login==1?<h1>One</h1>:login==2?<h1>Two</h1>:login==3?<h1>Three</h1>:<h1>Null</h1>
                }
            </div>
        )
}

export default Profile