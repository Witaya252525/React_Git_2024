
import './App.css';
import AppHeader from './AppHeader'
import TattooItems from './TattooItems'




function App() {
  return (
    <div className="app">

      <AppHeader/>
      
      <div className="app-grid">
     
      <TattooItems/>
      <TattooItems/>
      <TattooItems/>
      <TattooItems/>

      



      </div>
    </div>
  );
}

export default App;
