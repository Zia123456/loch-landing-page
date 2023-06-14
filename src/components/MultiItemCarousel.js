import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './MultiItemCarousel.css';
import Bell from '../images/bell (1).png';
import Barchart from '../images/bar-chart-2.png';
import Clock from '../images/clock.png';

const MultiItemCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel
      responsive={responsive}
      partialVisible
      autoPlay
      autoPlaySpeed={3000}
      infinite
    >
      <div className="carousel-card-1 card">
        <div className="bell-save-container">
          <div className="bell-img-container">
            <img src={Bell} alt="Bell" />
          </div>
          <div className="text-save-container">
            <button type="button" className="save">Save</button>
          </div>
        </div>
        <div className="text-container">
          <p> We’ll be sending notifications to you here</p>
        </div>
        <div className="input-container">
          <input type="text" className="email-input" />
        </div>
      </div>
      <div className="carousel-card-2 card">
        <div className="bar-chart-check-box-container">
          <div className="bar-chart-container">
            <img src={Barchart} alt="bar-chart" />
          </div>
          <div className="checkbox">
            <input type="checkbox" className="checkbox" />
          </div>
        </div>
        <div className="caption-container">
          <p>Notify me when any wallets move more than</p>
        </div>
        <div className="select-container">
          <select name="amount" id="amount">
            <option value="$1000.00">$1000.00</option>
            <option value="$1000.00">$10000.00</option>
            <option value="$1000.00">$100000.00</option>
            <option value="$1000.00">$1000000.00</option>
          </select>
        </div>
      </div>
      <div className="carousel-card-3 card">
        <div className="clock-checkbox-container">
          <div className="clock-container">
            <img src={Clock} alt="clock" />
          </div>
          <div className="checkbox">
            <input type="checkbox" className="checkbox" />
          </div>
        </div>
        <div className="caption-notify-me">
          <p>Notify me when any wallet dormant for</p>
        </div>
        <div className="select-days-container">
          <select name="days" id="days">
            <option value="30">&gt; 30 days</option>
            <option value="30">&gt; 60 days</option>
            <option value="30">&gt; 90 days</option>
            <option value="30">&gt; 120 days</option>
          </select>
        </div>
        <div className="become-active-text-container">
          <p>becomes active</p>
        </div>
      </div>
    </Carousel>
  );
};

export default MultiItemCarousel;
