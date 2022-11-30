import React from 'react';
import { Provider } from 'react-redux'
import logo from './logo.svg';
import './App.css';
import ChatPage from './Views/ChatPage/ChatPage';
import store from './Redux/Messages/Store';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <ChatPage/>
    </div>
    </Provider>
  );
}

export default App;
