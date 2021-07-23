import './styles/App.scss';
import Profile from './components/profile';
import Search from './components/search';
import ChatList from './components/chatlist';
import ChatSection from './components/chatsection';
import Login from './components/login';
import { BASE_URL, LOGIN } from './utils/apiEndpoints';
import { postRequest } from './utils/apiRequests';
import { useState } from 'react';



function App() {
  const [error, setError] = useState(null);
  const [userObj, setUserObj] = useState(null);

    const handleLogin = async (userData) => {
      const formData = new FormData();
      if(userData.file){
        formData.append("profileImg", userData.file, userData.file.name);
      }
      formData.append("payload", JSON.stringify({name: userData.name}));

      const response = await postRequest(`${BASE_URL}${LOGIN}`, formData);

      console.log(response);

      if(response.error){
        setError(response.error);
        return false;
      }

      setUserObj(response);
      
    }

  return (
    <>
      {true ? (
        <Login handleLogin={handleLogin} />
      ) : (
    <div className="App">
      <div className="sidebar">
        <Profile />
        <Search />
        <ChatList />
      </div>
      <div className="body">
        <ChatSection />
      </div>
    </div>
      )}
    </>
  );
}

export default App;
