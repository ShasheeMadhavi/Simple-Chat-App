import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEllipsisV} from '@fortawesome/free-solid-svg-icons';
import '../styles/chatheader.scss';

const ChatHeader = () => {
    return (
        <div className="chat-header">
            <div className="img-container">
                <img
                alt="profile" 
                src="https://static.remove.bg/remove-bg-web/8be32deab801c5299982a503e82b025fee233bd0/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg" 
                />        
            </div> 
            <div className="chat-details">
                <h4 className="title">USER 1</h4>
                <p className="desc">Online</p>
            </div>
            <div className="action-items">
                <FontAwesomeIcon icon={faEllipsisV} className="icon-block" />
            </div>
        </div>
    );
};

export default ChatHeader;