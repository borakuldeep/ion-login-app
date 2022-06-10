import {useState} from 'react';
import { Header } from './components/Header';
import { PrivateContent } from './components/PrivateContent';
import { Welcome } from './components/Welcome';

function App() {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setUser={setUser}/>
      <div className="content">{isLoggedIn? <PrivateContent user={user} />: <Welcome />}</div>
    </div>
  );
}

export default App;
