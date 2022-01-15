import './App.css';
import { Navbar } from './components/Landing/Navbar/Navbar';
import { Allroutes } from './components/Routes/AllRoutes';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Allroutes/>
    </div>
  );
}

export default App;
