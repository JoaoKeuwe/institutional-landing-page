import logo from "../../assets/images/logo.svg";
import './style.css';

const NavBar = () => {
    return (
        <header className="navbar-container">
            <img src={logo} alt="" />
            <ul className="navbar-content" >
                <li>About</li>
                <li>Work</li>
                <li>Cases</li>
                <li>Contact</li>
            </ul>
        </header>
    );
};

export default NavBar;
