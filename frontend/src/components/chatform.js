import { faMicrophone, faPaperclip, faSmile } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import '../styles/chatform.scss';

const ChatForm = () => {
    return (
        <div className="chat-form">
            <div className="action-but{ton">
                <FontAwesomeIcon icon={faSmile} className="icon-block" />
                <FontAwesomeIcon icon={faPaperclip} className="icon-block" />
            </div>
            <input className="chat-input" placeholder="message" />
            <FontAwesomeIcon className="icon-block active" icon={faMicrophone} />
        </div>
    )
}

export default ChatForm;