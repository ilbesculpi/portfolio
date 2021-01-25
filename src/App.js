import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Work from './Work';
import Education from './Education';
import profile from './profile.json';

class App extends React.Component {

    state = {
        profile: {}
    }

    componentDidMount() {
        console.log('profile', profile);
        this.setState({ profile });
    }

    render() {
        return (
            <div className="container mt-4">
                <div className="row">
                    <div className="col-3">
                        <Sidebar profile={profile} />
                    </div>
                    <div className="col-9">
                        <Work />
                        <Education />
                    </div>
                </div>
            </div>
        );
    }

}

export default App;
