import '../styles/chat.scss';
import ScrollBottom from "react-scroll-to-bottom";
import{ shortFormatTime } from "../utils/helper";

const Chat = ( { sessionId, friendName, chats }) => {
    return (
        <ScrollBottom className="chat-section">
            {chats.map((chat) => (
                <div key={chat._id} className={`chat ${sessionId ? "you" : "me"}`}>
                <span className="name">{friendName}</span>
                <p className="msg">{chat.msg}</p>
                <span className="time">{shortFormatTime(chat.time)}</span>
            </div>
            ))}     
        </ScrollBottom>    
    )
}

export default Chat;