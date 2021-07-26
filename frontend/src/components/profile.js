import {faSignOutAlt, faUser} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import '../styles/profile.scss';
import AuthContext from '../context/AuthContext';
import { useContext } from 'react';

const Profile = ({handleLogout}) => {
    const userObj = useContext(AuthContext);
    const {profileImg, name } = userObj;
    return (
        <div className="profile">
            <div className="img-container">
                {profileImg ? (
                    <img alt="profile" src={profileImg} />
                ) : (
                    <FontAwesomeIcon className="icon-block" icon={faUser} />
                )}  
            </div>
            {name}
            <div className="action-items" onClick={handleLogout}>
                <FontAwesomeIcon icon={faSignOutAlt} className="logout"/>
            </div>
        </div>
    )

}

export default Profile;