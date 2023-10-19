import "./style.css"
import logo from '../../../assets/images/logo.svg'
import social from '../../../assets/icons/Social.svg'

const Form = () => {
    return (
        <div>
            <div className="container-form">
                <div className="container-content-form">
                    <h2>Let’s talk! </h2>
                    <p>
                        Fill out the form or send <br />  us an email, so we can see <br /> how we can   help <br />
                        you.<br /> <br /> <span className="span" > You can also schedule a <br /> meeting with Fernando! </span>
                    </p>
                    <p className="email">hi@nextly.team</p>
                    <button className="button-content">Schedule a meeting</button>
                </div>

                <div className="forms">
                    <input className="input" type="text" placeholder="Full Name" />
                    <input className="input" type="text" placeholder="E-mail" />
                    <input className="input" type="text" placeholder="Company" />
                    <input className="input-idea" type="text" placeholder="Tell us a bit of your idea" />
                    <button className="button-send">Send</button>
                </div>
                <hr />
            </div>
            <div className="form-footer">
                <div className="image-footer-mobile">
                    <img src={logo} alt="" />
                </div>
                <div className="location">
                    <p>Brazil</p>
                    <p>Av. Engenheiro Luís Carlos </p>
                    <p> Berrini, 1140 – São Paulo</p>
                </div>

                <div className="location">
                    <p>Brazil</p>
                    <p>Av. Engenheiro Luís Carlos </p>
                    <p> Berrini, 1140 – São Paulo</p>
                </div>

                <div className="location">
                    <p>Follow Us</p>
                    <img src={social} alt="" />
                </div>

                <div className="location">
                    <p>Contact Us</p>
                    <p>hi@nextly.team</p>
                    <p>+123 456 789</p>
                </div>

                <div className="image-footer-desktop">
                    <img src={logo} alt="" />
                </div>
            </div>

            <footer className="footer">
                <p>© 2023 João Keuwe. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Form;
