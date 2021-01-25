import React from 'react';
import './Sidebar.css';
import Skills from './Skills';

class Sidebar extends React.Component {

    render() {

        const { info, skills } = this.props.profile;

        const skillBlock = Object.keys(skills).map(key => {
            const skill = skills[key];
            return <Skills title={key} skills={ skill } />
        });

        return (

            <div className="w3-white w3-text-grey w3-card-4">

                <div className="w3-display-container">
                    <img src={process.env.PUBLIC_URL + '/avatar.jpg'} style={{ width:'100%'}} alt="Avatar" />
                    <div className="w3-display-bottomleft w3-container w3-text-black">
                        <h2>{ info.name }</h2>
                    </div>
                </div>

                <div className="w3-container">

                    <p>
                        <i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"></i>
                        { info.profession }
                    </p>
                    <p>
                        <i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"></i>
                        { info.location }
                    </p>
                    <p>
                        <i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"></i>
                        <a href={'mailto:'+info.email}>{ info.email }</a>
                    </p>
                    <p>
                        <i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"></i>
                        { info.telephone }
                    </p>
                    <hr/>

                    { skillBlock }

                </div>
            </div>
        );
    }
}

export default Sidebar;
