
import React, { useEffect, useState } from 'react';
import './Home.css';
import slider1 from '../../assets/images/slider-01.png';
import ustb from '../../assets/images/ustb.jpg';
import slider2 from '../../assets/images/slider-02.jpg';
import slider3 from '../../assets/images/slider-03.jpg';

const slides = [
  { image: slider1, caption: 'WELCOME.' },
  { image: ustb, caption: 'USTB 2021 - 2024' },
  { image: slider2, caption: 'Huzhou University 2017 - 2021' },
  { image: slider3, caption: '' }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="banner-slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="caption">
            <h2>{slide.caption}</h2>
          </div>
        </div>
      ))}
    </section>
  );
} 
