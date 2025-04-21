import avatar from './avatar.png';
import './Header.css';

function Header({ profile }) {
    return (
        <div className="container-fluid" id="home">
            <div className="row g-0">
                <div className="col-12 col-lg-3">
                    <div className="header-content bg-dark h-100 pt-6 pe-6 pb-6">
                        <div className="text-start d-flex flex-column justify-content-center wow fadeInUp" data-wow-delay="0.3s">
                            <p className="text-white sub-title">👋 Hello I'm Ilbert</p>
                            <h1 className="display-6 text-white mb-0">{ profile.jobTitle }</h1>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-9">
                    <div className="header-img d-flex h-100 pt-6 ps-6 pb-6">
                        <div className="row g-5">
                            <div className="col-xs-6 col-lg-3 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="bg-light p-4" style={{ borderRadius: '68% 32% 100% 0% / 0% 75% 25% 100%' }}>
                                    <img src={ avatar } className="img-fluid w-100" style={{ borderRadius: '68% 32% 100% 0% / 0% 75% 25% 100%' }} alt="Profile Pic" />
                                </div>
                            </div>
                            <div className="col-xs-6 col-lg-9 wow fadeInUp" data-wow-delay="0.3s">
                                <h1 className="display-6 mb-4">{ profile.jobTitle }</h1>
                                <p className="mb-4">{ profile.bio }</p>
                                <div className="d-flex align-items-center mb-2">
                                    <i className="fas fa-map-marker-alt text-primary me-3"></i>
                                    <p className="text-dark mb-0">{ profile.location }</p>
                                </div>
                                <div className="d-flex align-items-center mb-2">
                                    <i className="fas fa-envelope text-primary me-3"></i>
                                    <p className="text-dark mb-0"><a href={`mailto:${ profile.email }`}>{ profile.email }</a></p>
                                </div>
                                <div className="d-flex align-items-center mb-2">
                                    <i className="fab fa-whatsapp text-primary me-3"></i>
                                    <p className="text-dark mb-0"><a href={profile.phone.url}>{ profile.phone.text }</a></p>
                                </div>
                                <div className="d-flex mb-2">
                                    { profile.networks.map((network, index) => (
                                        <a key={`network_link_${index}`} className="btn btn-primary btn-sm-square me-3" href={network.url} target="_blank" rel="noreferrer">
                                            <i className={ network.icon + ' text-white'}></i>
                                        </a>
                                    ))}
                                </div>
                                <div className="d-flex align-items-center mt-3 mb-2">
                                    <a href="storage/Resume_Ilbert_Esculpi.pdf" download className="btn btn-primary py-2 px-4">
                                        <i className="fas fa-download me-2"></i>Download My CV
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
