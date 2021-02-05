import Navbar from './components/Navbar';
import Showcase from './components/Showcase';

function App() {
  return (
    <div>
          <div className="container">
            <Navbar/>
            </div> 
            <div className="showcase-container">
              <Showcase/>
            </div>
    </div>
  );
}

export default App;
