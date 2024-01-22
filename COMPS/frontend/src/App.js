import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SideBar } from './components/SideBar';
import { Main } from './components/Main';
import React from 'react';
import ReactDOM from 'react-dom';
import { RightBar } from './components/RightBar';


function App() {
  return (
    <div className="MainContent">
      <Header />
      <div className="content">
        <SideBar />
        <main className="main">
        <Main />
        </main>
        <RightBar />
      </div>
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
