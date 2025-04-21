
function Navbar() {
    return (
        <div className="container-fluid nav-section border-0">
            <nav className="navbar navbar-light">
                <div className="navbar-nav flex-column">
                    <a href="#home" className="nav-item nav-link active"><span className="fa fa-address-card"></span> Info</a>
                    <a href="#skills" className="nav-item nav-link"><span className="fas fa-tools"></span> Skills</a>
                    <a href="#experience" className="nav-item nav-link"><span className="fas fa-industry"></span> Experience</a>
                    <a href="#portfolio" className="nav-item nav-link"><span className="fas fa-briefcase"></span> Portfolio</a>
                    <a href="#services" className="nav-item nav-link"><span className="fas fa-laptop-code"></span> Services</a>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;