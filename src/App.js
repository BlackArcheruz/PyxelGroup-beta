import Navbar from './components/Navbar';
import Showcase from './components/Showcase';
import Who from './components/Who';
import Why from './components/Why';
import GetInTouch from './components/GetInTouch';

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
            <GetInTouch/>
    </div>
  );
}

export default App;
