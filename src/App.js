import './App.css';
import { Homepage } from './Components/Homepage/Homepage';
import Navbar from './Components/Navbar_Routing/Navbar';
import Router from './Components/Navbar_Routing/Router';

function App() {
  return (
    <div className="App">
      <Navbar />
    <Router />
      <Homepage />
    </div>
  );
}

export default App;
