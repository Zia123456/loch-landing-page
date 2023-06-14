import { useState } from 'react';
import Bell from '../images/Bell.png';
import Cohort from '../images/Cohorts 1.png';
import Eye from '../images/Eye.png';
import Logo from '../images/Vector.png';
import MultiItemCarousel from './MultiItemCarousel';
import MultiItemDragableCarousel from './MultiItemDragableCarousel';

function SignUp() {
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(true);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = email.includes('@') && email.includes('.');
    setValidEmail(isValid);

    if (isValid) {
      setError('');
      window.location.href = 'https://app.loch.one/welcome';
    } else {
      setError('Please enter a valid email!');
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setValidEmail(true);
  };

  return (
    <div className="main-signUp-container">
      <div className="notification-container">
        <div className="upper-row">
          <div className="upper-row-card-1">
            <div className="bell-container">
              <img src={Bell} alt="bell icon" className="bell" />
            </div>
            <div className="upper-label-container">
              <h4>Get notified when a highly correlated whale makes a move</h4>
            </div>
            <div className="lower-label-container">
              <p>
                Find out when a certain whale moves more than any preset amount on-chain
                or when a dormant whale you care about becomes active.
              </p>
            </div>
          </div>
          <div className="carousel-container">
            <MultiItemCarousel />
          </div>
        </div>
        <div className="midle-row">
          <div className="cohort-img-container">
            <img src={Cohort} alt="cohort" className="cohort" />
          </div>
          <div className="text-icon-container">
            <div className="eye-container">
              <img src={Eye} alt="eye" className="eye" />
            </div>
            <div className="midle-row-label-1">
              <h4>Watch what the whales are doing</h4>
            </div>
            <div className="midle-row-label-2">
              <p>
                All whales are not equal. Know exactly what the whales
                impacting YOUR portfolio are doing.
              </p>
            </div>
          </div>
        </div>
        <div className="bottom-row">
          <div className="testimoial-container">
            <h5>Testimonials</h5>
          </div>
          <div className="horizantle-line-container">
            <hr className="horizantle-line" />
          </div>
          <div className="logo-carousel-container">
            <div className="logo-container">
              <img src={Logo} alt="Logo" className="logo" />
            </div>
            <div className="testimonial-carousel-container">
              <MultiItemDragableCarousel />
            </div>
          </div>
        </div>
      </div>
      <div className="signUp-container">
        <div className="sign-up-text-container">
          <h3>Sign up for exclusive access.</h3>
        </div>
        <form className="form-container" onSubmit={handleSubmit}>
          <input
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
            placeholder="Your email address"
          />
          <button type="submit" className="btn">
            Get Started
          </button>
        </form>
        <div className="message">{validEmail ? '' : error}</div>
      </div>
    </div>
  );
}

export default SignUp;
