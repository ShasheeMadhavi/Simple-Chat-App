import './styles/App.scss';
import Profile from './components/profile';
import Search from './components/search';
import ChatList from './components/chatlist';
import ChatSection from './components/chatsection';
import Login from './components/login';


function App() {
  return (
    <>
      {true ? (
        <Login />
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
