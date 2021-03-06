import './styles/App.scss';
import Profile from './components/profile';
import Search from './components/search';
import ChatList from './components/chatlist';
import ChatSection from './components/chatsection';
import Login from './components/login';
import { BASE_URL, LOGIN, USER_LIST } from './utils/apiEndpoints';
import { postRequest, getRequest } from './utils/apiRequests';
import { useEffect, useReducer, useState } from 'react';
import { useCookies } from 'react-cookie';
import AuthContext from './context/AuthContext';
import io from 'socket.io-client';
import SocketContext from './context/SocketContext';
import friendsListReducer from './reducer/friendsListReducer';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


const initialState = {};

const socket = io.connect("http://localhost:2000", {
  reconnection: true,
  reconnectionDelay: 500,
  reconnectionAttempts: 10,
});

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(["chatapp"]);
  const [error, setError] = useState(null);
  const [recentMsg, setRecentMsg ] = useState({});
  const [recentOnlineFriend, setRecentOnlineFriend] = useState({});
  const [recentOfflineFriend, setRecentOfflineFriend] = useState({});
  const [userObj, setUserObj] = useState(() => {
    return cookies.user;
  });

  const [friendList, friendsListDispatch] = useReducer(
    friendsListReducer,
    initialState
  )

  useEffect(() => {
    if(userObj && userObj.sessionId){
      joinUser(userObj);
      getFriendsList(userObj);
    }
  }, []);

    const handleLogin = async (userData) => {
      const formData = new FormData();
      if(userData.file){
        formData.append("profileImg", userData.file, userData.file.name);
      }

      formData.append("payload", JSON.stringify({name: userData.name}));

      const response = await postRequest(`${BASE_URL}${LOGIN}`, formData);
      console.log(response);

      if(response.error) {
        setError(response.error);
        return false;
      }

      setCookie("user", response);
      setUserObj(response);
      joinUser(response);
      getFriendsList(response);
      
    }

    const handleLogout = () => {
      removeCookie("user");
      setUserObj(null);
    }

    const getFriendsList = async (userData) => {
      const response = await getRequest(
        `${BASE_URL}${USER_LIST}/${userData.sessionId}`
      );
      if(response.error) {
        setError(response.error);
        return false;
      }
      friendsListDispatch({type: "FRIENDS", payload: response});
      onlineOfflineUser();
    }

    const onlineOfflineUser = () => {
      socket.on("new-online-user", (data) => {
        friendsListDispatch({type: "NEW_FRIEND", payload: data});
        setRecentOnlineFriend(data);
      });
      socket.on("new-offline-user", (data) => {
        setRecentOfflineFriend(data); 
      })
    }

    const joinUser = (userData) => {
      let initData = {
        createdAt: userData.createdAt,
        name: userData.name,
        profileImg: userData.profileImg,
        sessionId: userData.sessionId,
        updatedAt: userData.updatedAt,
        _id: userData._id
      };

      socket.emit("join-user", initData, () => {
        console.log("User Joined");
      });

      socket.on("receive-msg", (data) => {
        console.log(data);
        updateRecentMsg(data);
        setRecentMsg(data);
      });

      socket.on("user-typing", (data) => {
        console.log(data);
        updateRecentMsg(data);
      });
    };

    const updateRecentMsg = (data) => {
      friendsListDispatch({ type: "RECENT_MSG", payload: data });
    };

  return (
    <>
    {!(userObj && userObj.sessionId) ? (
      <Login handleLogin={handleLogin} />
       ) : (
        <AuthContext.Provider value={userObj} >
          <SocketContext.Provider value={socket}>
            <div className="App">
              <Router>
                <div className="sidebar">
                  <Profile handleLogout={handleLogout}/>
                  <Search />                        
                  <ChatList friendList={friendList} />
                </div>
                <Switch>
                  <Route path="/:id">
                    <div className="body">
                      <ChatSection 
                        updateRecentMsg={updateRecentMsg}
                        recentMsg={recentMsg}
                        recentOnlineFriend={recentOnlineFriend}
                        recentOfflineFriend={recentOfflineFriend}
                      />
                    </div>
                  </Route>
                </Switch>
              </Router>
            </div>
            </SocketContext.Provider>
          </AuthContext.Provider>
        )}
      </>
    );
  }

export default App;
