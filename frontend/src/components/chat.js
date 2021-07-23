import '../styles/chat.scss';

const Chat = () => {
    return (
        <div className="chat-section">
            <div className="chat you">
                <span className="name">user 1 </span>
                <p className="msg">Hi!</p>
                <span className="time">07:15 PM</span>
            </div>

            <div className="chat me">
                <span className="name">user 2 </span>
                <p className="msg">This is message</p>
                <span className="time">07:15 PM</span>
            </div>
            
        </div>

        
    )
}

export default Chat;