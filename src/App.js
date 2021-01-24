import './App.css';
import Sidebar from './Sidebar';
import Work from './Work';
import Education from './Education';


function App() {
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-3">
                    <Sidebar />
                </div>
                <div className="col-9">
                    <Work />
                    <Education />
                </div>
            </div>
        </div>
    );
}

export default App;
