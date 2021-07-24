import { faMicrophone, faPaperclip, faSmile } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react";
import '../styles/chatform.scss';

const ChatForm = ( {sendMsg, sendTyping}) => {
    const [msg, setMsg] = useState("");
    const [record, setRecord] = useState(false);

    const handleChange = (e) => {
        setMsg(e.target.value);
        sendTyping({value: e.target.value, type: "typing", theme: "text"});
    }

    const handleSend = (e) => {
        if(e.key === "Enter"){
            setMsg("");
            sendMsg({value: e.target.value, type: "message", theme: "text"});
        }
    }
    return (
        <div className="chat-form">
            <div className="action-but{ton">
                <FontAwesomeIcon icon={faSmile} className="icon-block" />
                <FontAwesomeIcon icon={faPaperclip} className="icon-block" />
            </div>
            <input className="chat-input" placeholder="message" value={msg} onChange={(e) => handleChange(e)} onKeyPress={(e) => handleSend(e)} />
            <FontAwesomeIcon className="icon-block active" icon={faMicrophone} />
        </div>
    )
}

export default ChatForm;