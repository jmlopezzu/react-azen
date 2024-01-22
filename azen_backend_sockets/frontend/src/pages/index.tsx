import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import Sidebar from './components/Sidebar';
import Combinet from './components/Combinet'; 
import Axios from './components/Axios'; 

// Function to render the main App component
function App() {
  // Your existing App component logic here
  // ...
  return (
    <div className="app-container">
      <Header />
      <div className="main-container">
        <Sidebar />
        <main className="main-content">
          <MainContent />
        </main>
        <Combinet />
      </div>
      <Footer />
      <Axios />
    </div>
  );
}

export default App;
