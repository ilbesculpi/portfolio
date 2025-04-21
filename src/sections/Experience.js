
function Experience({ experience }) {
    return (
        <div className="container-fluid" id="experience">
            <div className="row g-0">
                <div className="col-lg-3">
                    <div className="experience-header bg-dark h-100 pt-6 pe-6 pb-6">
                        <div className="text-start d-flex flex-column justify-content-center wow fadeInUp" data-wow-delay="0.1s">
                            <p className="text-white sub-title">Experience</p>
                            <h1 className="display-6 text-white mb-0">My real work experience</h1>
                        </div>
                    </div>
                </div>
                <div className="col-lg-9">
                    <div className="experience-content h-100 pt-6 ps-6 pb-6">
                        <div className="row g-4">
                            { experience.map((job, index) => (
                            <div className="col-12">
                                <div className="experience-item rounded p-4 h-100 wow fadeInUp" data-wow-delay="0.1s">
                                    <div className="d-flex align-items-center mb-3">
                                        <p className="fs-5 mb-0 me-4">{ job.company }</p>
                                        <div>
                                            <span className="fa fa-calendar me-1"></span> { job.date }
                                        </div>
                                    </div>
                                    <h4 className="mb-3">{ job.title }</h4>
                                    <p className="mb-0">{ job.description }</p>
                                </div>
                            </div>
                            )) }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Experience;