import React, { useState } from "react";

function Login() {
    const [user, setUser] = useState("")
    const [pwd, setPwd] = useState("")
    const [userErr, setUserErr] = useState(false)
    const [passErr, setPassErr] = useState(false)
    function loginHandle(e) {
        if(user=="" || pwd==""){
            alert("Name and password must be required")
        }
        else{
            if(user.length < 3 || pwd.length<3){
                alert("Length minimum 3 character allowed")
            }else{
                alert("login successfully")
            }
        }
        e.preventDefault()
    }
    function userHandle(e) {
        let item = e.target.value;
        if (item.length < 3) {
            setUserErr(true)
        } else {
            setUserErr(false)
        }
        setUser(item)
    }
    function passHandle(e){
        let item=e.target.value;
        if(item.length<3){
            setPassErr(true)
        }
        else{
            setPassErr(false)
        }
        setPwd(item)
    }
    return (
        <div className="Login">
            <h1>Login</h1>
            <form onSubmit={loginHandle}>
                <input type="text" placeholder="Enter userid" onChange={userHandle} />{userErr ? <span>User Not Valid</span> : ""}<br /><br />
                <input type="password" placeholder="Enter password" onChange={passHandle} />{passErr ? <span>Paasword Not Valid</span> : ""}<br /><br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Login