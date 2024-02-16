
import './index.css'

const Navbar = () => {

    return (
      <nav className="navbar">
        <div className="navbar-title">FashionWeb</div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <span className="nav-link">Home</span>
          </li>
          <li className="nav-item">
            <span className="nav-link active">Products</span>
          </li>
          <li className="nav-item">
            <span className="nav-link">Cart</span>
          </li>
          <li className="nav-item">
            <span className="nav-link">Wishlist</span>
          </li>
        </ul>
      </nav>
    );
  }
  
  export default Navbar;