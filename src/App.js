import React from 'react';
import './App.css';
import profile from './profile.json';
import Portfolio from './components/Portfolio';

class App extends React.Component {

    componentDidMount() {
        console.log('profile', profile);
    }

    render() {
        return <Portfolio data={ profile } />
    }

}

export default App;
