import '../styles/profile.scss';
import AuthContext from '../context/AuthContext';
import { useContext } from 'react';

const Profile = ({handleLogout}) => {
    const userObj = useContext(AuthContext);
    const {profileImg, name } = userObj;
    return (
        <div className="profile">
            <div className="img-container">
                <img alt="profile" src={profileImg} />
            </div>
            {name}
            <div className="action-items" onClick={handleLogout}>
                <div className="logout">Logout</div>
            </div>
        </div>
    )

}

export default Profile;