import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="main-container">
        <Sidebar />
        <main className="main-content">
          <MainContent />
        </main>
        <Footer />
      </div>
      <Footer />
    </div>
    
  );
}

ReactDOM.render(<App />, document.getElementById("root"));

export default App;
