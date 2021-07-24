import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import '../styles/login.scss';

const Login = ({ handleLogin }) => {

    const [user, setUser] = useState({
        name: "",
        file: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        handleLogin(user)
    }

    const handleNameChange = (e) => {
        setUser({...user, name: e.target.value});
    }

    const onFileChange = (e) => {
        setUser({...user, file: e.target.files[0] });
    }

    return (
       <div className="login-container">
           <div className="logo">
               <img alt="logo" src="https://img.icons8.com/bubbles/2x/chat.png" />
           </div>
           <div className="login-form">
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="profile-img">
                    <input className="file-upload" type="file" onChange={(e) => onFileChange(e)} />
                    <FontAwesomeIcon className="icon-block" icon={faUser} />
                </div>
                <div className="profile-name">
                    <FontAwesomeIcon className="icon-block" icon={faUser} />
                    <input placeholder="Your Name Here" type="text" name="name" onChange={(e) => handleNameChange(e)} />
                </div>
                <input 
                    type="submit"
                    className="profile-submit-btn"
                    value="Join Now"
                    />
            </form>
        </div>
    </div>
    )
}

export default Login;