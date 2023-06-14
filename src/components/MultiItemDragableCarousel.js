import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './MultiItemDragableCarousel.css';

const MultiItemDragableCarousel = () => {
  const responsive = {
    superLargeDesktop: {
    // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1024 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
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
      infinite
    >
      <div className="testimonial-card-1">
        <div className="jack-text-container">
          <span className="jack">Jack F</span>
          <span className="Blackrock">Ex Blackrock PM</span>
        </div>
        <div className="jack-supporting-text-container">
          <p>
            “Love how Loch integrates portfolio
            analytics and whale watching into one unified app.”
          </p>
        </div>
      </div>
      <div className="testimonial-card-2">
        <div className="yash-text-container">
          <span className="yash">Yash P</span>
          <span className="research">
            Research, 3poch Crypto Hedge Fund
          </span>
        </div>
        <div className="yash-supporting-text-container">
          <p>
            “I use Loch everyday now. I don&apos;t think I could analyze
            crypto whale trends markets without it. I&apos;m addicted!”
          </p>
        </div>
      </div>
      <div className="testimonial-card-3">
        <div className="shiv-text-container">
          <span className="shiv">Shiv S</span>
          <span className="co-founder">Co-Founder Magik Labs</span>
        </div>
        <div className="shiv-supporting-text-container">
          <p>
            “Managing my own portfolio is helpful and well designed. What’s
            really interesting is watching the whales though. No one else
            has made whale tracking so simple.”
          </p>
        </div>
      </div>
    </Carousel>
  );
};

export default MultiItemDragableCarousel;
