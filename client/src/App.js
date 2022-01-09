import './App.css';
import React from "react"
import Header from './Components/Header';
import SideBar from './Components/SideBar';
import Feed from './Components/Feed';
import Widget from './Components/Widget';

function App() {
  return (
    <div className="App">
      <Header />
    <div className='App__body'>
      <SideBar />
      <Feed />
      <Widget />
      </div>
    </div>
  );
}

export default App;
