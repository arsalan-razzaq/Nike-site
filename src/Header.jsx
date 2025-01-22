import { FaSearch, FaShoppingCart, FaBars } from 'react-icons/fa'; 
const Header =() =>{
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-theme px-5">
          {/* Left Logo */}
          <a className="navbar-brand" href="#">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg"
              alt="Logo"
              className='logo-light'
              style={{ width: '40px' }}
            />
          </a>
    
          {/* Navbar links */}
          <div className="collapse navbar-collapse justify-content-center">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link text-uppercase" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-uppercase" href="#">
                  Men
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-uppercase" href="#">
                  Women
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-uppercase" href="#">
                  Collection
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-uppercase" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
    
          {/* Right Icons */}
          <div className="d-flex align-items-center">
            <FaSearch className="mx-3" size={20} />
            <FaShoppingCart className="mx-3" size={20} />
            <FaBars className="mx-3" size={20} />
          </div>
        </nav>

    );
}  

export default Header;