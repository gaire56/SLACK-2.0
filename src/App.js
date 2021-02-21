import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import styled from 'styled-components';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Chat from './components/chat/Chat';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase/firebase';
import Login from './components/login/Login';

function App() {
  const [user, loading] = useAuthState(auth);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <AppBody>
              <Sidebar />
              <Switch>
                <Route path="/" exact>
                  <Chat />
                </Route>
              </Switch>
            </AppBody>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
