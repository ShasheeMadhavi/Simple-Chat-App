import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';
import '../styles/chatlist.scss';

const ChatList = () => {
    return (
        <div className="chat-list">
            <div className="chat-item">
                <div className="img-container">
                    <img alt="profile" src="https://static.remove.bg/remove-bg-web/8be32deab801c5299982a503e82b025fee233bd0/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg" />
                </div>
                <div className="chat-detail">
                    <h4 className="chat-title">Sample User</h4>
                    <p className="chat-description">Message body preview goes here!</p>
                </div>
                <div className="timestamp">
                    00:00 
                </div>
                <div className="action-button">
                    <FontAwesomeIcon icon={faChevronDown} />
                </div>
            </div>
        </div>
    )
}

export default ChatList;

