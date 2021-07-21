import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../styles/login.scss';
const Login = () => {
    return (
       <div className="login-container">
           <div className="logo">
               <img alt="logo" src="https://img.icons8.com/bubbles/2x/chat.png" />
           </div>
           <div className="login-form">
            <form>
                <div className="profile-img">
                    <input className="file-upload" type="file" />
                    <FontAwesomeIcon className="icon-block" icon={faUser} />
                </div>
                <div className="profile-name">
                    <FontAwesomeIcon className="icon-block" icon={faUser} />
                    <input placeholder="Your Name Here" type="text" name="name" />
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