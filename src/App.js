
import './App.css';
import AppHeader from './components/AppHeader'
import TattooItems from './components/TattooItems'
import TattooPost from './components/TattooPost'




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
      <TattooPost/>
    </div>
  );
}

export default App;
