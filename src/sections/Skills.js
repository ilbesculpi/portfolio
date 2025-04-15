
function Skills({ skills }) {

    return (
        <div className="container-fluid">
            <div className="container">
                <div className="row g-0">
                    <div className="col-lg-2">
                        <div className="skills-header h-100 bg-dark pt-6 pe-6 pb-6">
                            <div className="text-start d-flex flex-column justify-content-center wow fadeInUp" data-wow-delay="0.1s">
                                <p className="text-white sub-title">Skills</p>
                                <h1 className="display-6 text-white mb-0">My expertise skills</h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-10">
                        <div className="skills-content h-100 pt-6 ps-6 pb-6">
                            <div className="row g-4">
                                { skills.map((skill, index) => (
                                    <div className="col-6 col-md-4 col-lg-4 col-xl-3">
                                    <div className="skills-item text-center rounded p-4 h-100 wow fadeInUp" data-wow-delay="0.1s">
                                        <div className="text-primary text-center mb-3">
                                            <span className={ 'fa-3x ' + skill.icon }></span>
                                        </div>
                                        <div className="counter-counting d-flex justify-content-center">
                                            <h4 className="display-6" data-toggle="counter-up">{ skill.value }</h4>
                                        </div>
                                        <p className="mb-0">{ skill.title }</p>
                                    </div>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;