import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login(){
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [formMessage, setMessage] = useState('');
    
    const handelSubmit = (e)=>{
        
        e.preventDefault();
        if(userName == ''){
            setMessage('Please provide Username');
            return;
        }
        if(password == ''){
            setMessage('Please provide Password');
            return;
        }

        if(userName != 'admin' && password != 'admin'){
            setMessage('Username and password is not matching');
            return;
        } else {
            localStorage.setItem("authenticated", true);
            navigate("/home");
            return;
        }
    }
    return(
        <div style={{marginLeft:'200px'}}>
            <h3>Login</h3>
            {formMessage ? <div className="alert-danger">{formMessage}</div> : ''}
            <form className="form" onSubmit={handelSubmit}>
                <div className="form-row">
                    <label className="form-label" htmlFor="userName">UserName: *</label>
                    <input type="text" id="userName" value={userName} placeholder="Username is admin" className="form-input" onChange={(e) => {setUserName(e.target.value)}}/>
                </div>
                <div className="form-row">
                    <label className="form-label" htmlFor="password">Password: *</label>
                    <input type="password" id="password" value={password} placeholder="Password is admin" className="form-input" onChange={(e) => {setPassword(e.target.value)}}/>
                </div>
                <button className="btn" type="submit">Login</button>
            </form>
        </div>
    )
}