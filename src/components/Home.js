import Showcase from './Showcase';
import Who from './Who';
import Why from './Why';
import GetInTouch from './GetInTouch';

const Home = () => {
    return (
        <div>
            <div className="showcase-container">
              <Showcase/>
            </div>
            <Who/>
            <Why/>
            <GetInTouch/>
        </div>
    )
}

export default Home
