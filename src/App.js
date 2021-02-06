import Navbar from './components/Navbar';
import Showcase from './components/Showcase';
import Who from './components/Who';

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
    </div>
  );
}

export default App;
