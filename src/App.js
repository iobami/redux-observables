import React, { useState } from 'react';
import { connect, useSelector } from 'react-redux';
import { setAllUsers } from './redux/actions/allUsers';
import logo from './logo.svg';
import './App.css';

function App({ dispatch }) {

  const [username, setUsername] = useState('');
  const storeObject = useSelector(state => state);

  const searchUsers = () => {

      dispatch(setAllUsers([username]));
      dispatch({ type: 'GET_USER_DATA', payload: {} });
      dispatch({ type: 'LOADING', payload: username });

      setUsername('');
  };


    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={storeObject.reducer.loader ? 'App-logo App-logo-loader' : 'App-logo'} alt="logo" />
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Github Username"
          value={username} onChange={e => setUsername(e.target.value)}/>
          <button onClick={searchUsers}>Search</button>
        </div>
      </header>

        {Object.keys(storeObject.userDataReducer.gitHubInfo).length
            ? (
                <div>
                    <div>Username: {storeObject.userDataReducer.gitHubInfo.login} </div>
                    <div>Followers: {storeObject.userDataReducer.gitHubInfo.followers} </div>
                    <div>Following: {storeObject.userDataReducer.gitHubInfo.following} </div>
                    <div>Public Repos: {storeObject.userDataReducer.gitHubInfo.public_repos} </div>
                    <div>Url: {storeObject.userDataReducer.gitHubInfo.url} </div>
                </div>
            )
            : null
        }

    </div>
  );
}

export default connect()(App);
