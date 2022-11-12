import './App.css';
import Footer from './Components/Footer/Footer';
// import { RecipesData1 } from './Components/Recipes/Pasination/recipes1';
import Fetch from './Components/Recipes/Fetch';
import Recipes from './Components/Recipes/Recipes';


function App() {
  return (
    <div className="App">
      <h1>Welcome Team</h1>
      <p>Make Your respective pages and Link it over here.</p>
      {/* <Fetch/> */}
      <Recipes/>
     
      <Footer/>
    </div>
  );
}

export default App;
