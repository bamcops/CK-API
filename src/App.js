
import { Route, Routes } from 'react-router-dom';
import './App.css';
import UserList from './components/ UserList';
import Home from './components/Home';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <h1>Hello ws API f3</h1>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/userslist" element = {<UserList/>} />
      </Routes>
      <UserList />
    </div>
  );
}

export default App;
