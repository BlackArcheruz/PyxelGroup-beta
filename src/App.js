import Navbar from './components/Navbar';
import Showcase from './components/Showcase';
import Who from './components/Who';
import Why from './components/Why';

function App() {
  return (
    <div>
          <div className="container">
            <Navbar/>
            </div> 
            <div className="showcase-container">
              <Showcase/>
            </div>
            <Who/>
            <Why/>
    </div>
  );
}

export default App;
