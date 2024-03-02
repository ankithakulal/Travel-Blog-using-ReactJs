// About.js
import React from 'react';
import './About.css'; // Import a separate CSS file for styling

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
      <img
        className="about-image"
        src="https://th.bing.com/th/id/OIP.0ot2LIpsSJMj8O2jNeFQfQHaH_?pid=ImgDet&w=206&h=222&c=7&dpr=1.3" // Replace with the URL or path to your image
        alt="Travelers"
        width={400}
      />
      <h1>About Us</h1>
      <p>
        Welcome to our travel blog! We are passionate explorers on a journey to discover the beauty
        and wonders of the world. Our mission is to inspire and guide fellow travelers through our
        experiences and stories.
      </p>
      <p>
        At the heart of our travel adventures is the belief that every journey is an opportunity
        for personal growth and cultural understanding. Whether it's wandering through bustling
        cities, trekking in serene landscapes, or savoring local cuisines, each moment enriches
        our lives and broadens our perspectives.
      </p>
      <p>
        Join us as we share our travel insights, tips, and captivating tales. Let's embark on
        this exciting adventure together, embracing the diversity and beauty that our world has to offer!
      </p>
      </div>
    </div>
  );
};

export default About;
