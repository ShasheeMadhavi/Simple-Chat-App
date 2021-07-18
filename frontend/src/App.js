import './styles/App.scss';
import Profile from './components/profile';
import Search from './components/search';
import ChatList from './components/chatlist';

function App() {
  return (
    <div className="App">
            <div className="sidebar">
        <Profile />
        <Search />
        <ChatList />
      </div>
      <div className="body">
      </div>
    </div>
  );
}

export default App;
