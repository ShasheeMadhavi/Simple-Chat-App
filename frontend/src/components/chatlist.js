import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChevronDown} from '@fortawesome/free-solid-svg-icons';
import '../styles/chatlist.scss';

const ChatList = () => {
    return (
        <div className="chat-list">
            <div className="chat-item">
                <div className="img-container">
                    <img alt="profile" src="https://alrigh.com/wp-content/uploads/2020/06/19-tom-profile-picture.webp" />
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

