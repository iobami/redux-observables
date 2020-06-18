import React, { useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { ajax } from 'rxjs/ajax';
import { setAllUsers } from './redux/actions/allUsers';
import { loading } from './redux/redux-actions/search';
import logo from './logo.svg';
import './App.css';

function App({ dispatch }) {

  const [username, setUsername] = useState('');
  const storeObject = useSelector(state => state);

  const searchUsers = () => {
    dispatch(setAllUsers([username]));
    dispatch(loading());

      const githubUsers = `https://api.github.com/users/${username}`;

      const users = ajax(githubUsers);

      const subscribe = users.subscribe(
          res => console.log(res),
          err => console.error(err)
      );
      console.log(subscribe);


      setUsername('');
  };
  console.log(storeObject);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Github Username"
          value={username} onChange={e => setUsername(e.target.value)}/>
          <button onClick={searchUsers}>Search</button>
        </div>
      </header>
    </div>
  );
}

export default connect()(App);
