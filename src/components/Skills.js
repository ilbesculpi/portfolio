import React from 'react';

class Skills extends React.Component {

    render() {

        const { title, skills } = this.props;

        const skillBlock = skills.map(skill => {
            return (<div>
                <p>{ skill.label }</p>
                <div className="w3-light-grey w3-round-xlarge w3-small">
                    <div className="w3-container w3-center w3-round-xlarge w3-teal" style={{ height: 24, width: skill.value +'%'}}>
                        { skill.value + '%' }
                    </div>
                </div>
            </div>);
        });

        return (
            <div>
                <p className="w3-large">
                    <b><i className="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"></i>{ title }</b>
                </p>
                { skillBlock }
                <br />
            </div>);
    }
}

export default Skills;
