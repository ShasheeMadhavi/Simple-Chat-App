import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEllipsisV, faUser} from '@fortawesome/free-solid-svg-icons';
import '../styles/chatheader.scss';
import { formatDate } from '../utils/helper';

const ChatHeader = ({friendInfo}) => {

    const {isOnline, profileImg, name, updatedAt} = friendInfo;

    return (
        <div className="chat-header">
            <div className="img-container">
                {profileImg ? (
                    <img alt="profile" src={profileImg} /> 
                ) : (
                <FontAwesomeIcon className="icon-block" icon={faUser}/> 
                )}

            </div> 
            <div className="chat-details">
                <h4 className="title">{name ? name: ""}</h4>
                <p className="desc">{isOnline ? "online" : `Last seen ${updatedAt ? formatDate(updatedAt) : ""}`}</p>
            </div>
            <div className="action-buttons">
                <FontAwesomeIcon icon={faEllipsisV} className="icon-block"/>
            </div>
        </div>
    )
}

export default ChatHeader;