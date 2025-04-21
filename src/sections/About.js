
function About({ profile }) {
    return (
        <div className="container-fluid" id="pigraAbout">
            <div className="container">
                <div className="row g-0">
                    <div className="col-12 col-lg-3">
                        <div className="about-header bg-dark h-100 pt-6 pe-6 pb-6">
                            <div className="text-start d-flex flex-column justify-content-center wow fadeInUp" data-wow-delay="0.1s">
                                <p className="text-white sub-title">About Me</p>
                                <h1 className="display-6 text-white mb-0">UI Designer based in NYC, USA since 2025</h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-9">
                        <div className="about-content h-100 pt-6 ps-6 pb-6">
                            <div className="row g-5">
                                <div className="col-xl-5">
                                    <div className="about-img bg-light p-4 wow fadeInUp" data-wow-delay="0.1s">
                                        <img src="img/about.jpg" className="img-fluid w-100" alt="About" />
                                        <div className="sosial-icon">
                                            <a className="btn btn-primary btn-sm-square mb-3" href="#"><i className="fab fa-facebook-f text-white"></i></a>
                                            <a className="btn btn-primary btn-sm-square mb-3" href="#"><i className="fab fa-twitter text-white"></i></a>
                                            <a className="btn btn-primary btn-sm-square mb-3" href="#"><i className="fab fa-instagram text-white"></i></a>
                                            <a className="btn btn-primary btn-sm-square mb-0" href="#"><i className="fab fa-linkedin-in text-white"></i></a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-7 wow fadeInUp" data-wow-delay="0.3s">
                                    <h4 className="mb-4">Hello, I'm Mezbah, Based in USA</h4>
                                    <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam repellat, sint magni incidunt voluptatum eveniet numquam vel facilis sit similique a mollitia et dolorum aperiam repellendus ipsum, quidem nemo eligendi!
                                    </p>
                                    <div className="row g-4 mb-4">
                                        <div className="col-6">
                                            <p><strong className="fw-bold text-dark">Phone :</strong> + 113-804-9098</p>
                                            <p><strong className="fw-bold text-dark">skype :</strong> mezbah.wallas</p>
                                            <p className="mb-0"><strong className="fw-bold text-dark">Address :</strong> 123 Street New York</p>
                                        </div>
                                        <div className="col-6">
                                            <p><strong className="fw-bold text-dark">Nationality :</strong> New York, USA</p>
                                            <p><strong className="fw-bold text-dark">Email :</strong> contact@mezbah.com</p>
                                            <p className="mb-0"><strong className="fw-bold text-dark">Freelancer :</strong> Available</p>
                                        </div>
                                    </div>
                                    <a href="#" className="btn btn-primary py-2 px-4"> <i className="fas fa-download me-2"></i>Download My CV</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;