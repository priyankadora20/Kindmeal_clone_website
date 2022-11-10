import './App.css';
import { Question } from './Components/KindMoments/icon';
import { AirbnbCard, KindMonents } from './Components/KindMoments/KindMonents';

function App() {
  return (
    <div className="App">
      {/* <h1>Welcome Team</h1> */}
      {/* <p>Make Your respective pages and Link it over here.</p> */}
      
      <KindMonents />
      <AirbnbCard />
      {/* <Question /> */}
    </div>
  );
}

export default App;
