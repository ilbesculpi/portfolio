
function Portfolio({ portfolio }) {
    return (
        <div className="container-fluid" id="portfolio">
            <div className="row g-0">
                <div className="col-lg-3">
                    <div className="portfolio-header h-100 bg-dark pt-6 pe-6 pb-6">
                        <div className="text-start d-flex flex-column justify-content-center wow fadeInUp" data-wow-delay="0.1s">
                            <p className="text-white sub-title">Portfolio</p>
                            <h1 className="display-6 text-white mb-0">My Recent Works</h1>
                        </div>
                    </div>
                </div>
                <div className="col-lg-9">
                    <div className="portfolio-content h-100 pt-6 ps-6 pb-6">
                        { portfolio.map((item, projectId) => (
                            <div key={"project_"+projectId} className="portfolio-item py-5 border-bottom wow fadeInUp" data-wow-delay="0.1s">
                                <div className="row g-4 align-items-center">
                                    <div className="col-12">
                                        <h4 className="text-body">{ item.subtitle }</h4>
                                        <h1 className="display-6 mb-0">
                                            { item.headline }
                                            { item.projectUrl && <a href={item.projectUrl} target="_blank" rel="noreferrer"><i class="fas fa-external-link-alt ms-4"></i></a>}
                                        </h1>
                                        <p><small>{ item.tags }</small></p>
                                    </div>
                                    { item.photos.map((photo, index) => (
                                    <div key={"photo_"+projectId+"_"+index} className={'col-6 ' + (item.cols === 4 ? 'col-lg-3' : 'col-lg-4') }>
                                        <a href={getImageUrl(photo.url)} data-lightbox={'project_'+projectId} data-index={index}>
                                            <img src={getImageUrl(photo.url)} className="img-fluid img-thumbnail rounded" alt={photo.title} />
                                        </a>
                                    </div>
                                    )) }
                                </div>
                            </div>
                        )) }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;

function getImageUrl(path) {
    return process.env.PUBLIC_URL + '/' + path;
}
