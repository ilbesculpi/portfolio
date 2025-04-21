
function Footer({ profile }) {
    return (
        <div className="container-fluid footer bg-dark border-bottom-0">
            <div className="container wow fadeIn" data-wow-delay="0.1s">
                <div className="row g-0">
                    <div className="col-12">
                       <div className="footer-content h-100 pt-6 ps-6 pb-6">
                            <div className="row g-4 align-items-center">
                                <div className="col-12 text-center">
                                    <div className="d-flex justify-content-center">
                                        { profile.networks.map((network, index) => (
                                            <a key={`footer_link_${index}`} className="btn btn-light btn-md-square me-3" href={network.url} target="_blank" rel="noreferrer">
                                                <i className={network.icon}></i>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                                <div className="col-12 text-center">
                                    <span className="text-body"><i className="fas fa-copyright text-body me-2"></i>Ilbert Esculpi @ 2025.</span>
                                </div>
                                <div className="col-12 text-center text-body">
                                    Designed By <a className="border-bottom text-white" href="https://htmlcodex.com" target="_blank" rel="noreferrer">HTML Codex</a>
                                </div>
                            </div>
                       </div>        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;