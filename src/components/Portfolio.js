import Sidebar from './Sidebar';
import About from './About';
import Work from './Work';
import Education from './Education';

export default function Portfolio(props) {

    const profile = props.data;

    return (<div className="container mt-4">
        <div className="row">
            <div className="col-3">
                <Sidebar profile={profile} />
            </div>
            <div className="col-9">
                <About />
                <Work />
                <Education />
            </div>
        </div>
    </div>);
}
