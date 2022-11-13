import './App.css';
import Navbar from './Components/Navbar_Routing/Navbar';
import Routers from './Components/Navbar_Routing/Router';
import Footer from "./Components/Footer/Footer";
import { KindMonents } from './Components/KindMoments/KindMonents';

function App() {
  return (
    <>
    <Navbar/>
 
    <Routers />
  
    <Footer/>

    </>
  );
}



export default App;
