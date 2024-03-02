
// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import About from './About';
import './App.css'


const App = () => {
  const posts = [
    {
      id: 1,
      title: 'Exploring a New City',
      content: `Last summer, I had the opportunity to explore the enchanting city of Kyoto in Japan. From the tranquil bamboo groves of Arashiyama to the historic Fushimi Inari Shrine, every moment was filled with cultural richness. The traditional tea ceremonies and cherry blossom festivals added to the magical experience. Join me in this journey through the streets of Kyoto, where ancient traditions meet modern wonders.`,
      images: ['kyoto1.jpg', 'kyoto2.jpg', 'kyoto3.jpg'],
      date: '2022-07-10',
      author: 'WanderlustExplorer',
      tags: ['Kyoto', 'Japan', 'Cultural Exploration'],
    },
    {
      id: 2,
      title: 'Hiking Adventures',
      content: `Embarking on a series of hiking adventures in the Swiss Alps was a dream come true. The pristine landscapes, with snow-capped peaks and crystal-clear lakes, created a mesmerizing backdrop. Traversing through trails like the Eiger Trail and the Five Lakes Walk, I discovered the breathtaking beauty of the Alps. Join me in this exhilarating journey, where each step brought me closer to nature's wonders.`,
      images: ['swiss_alps1.jpg', 'swiss_alps2.jpg', 'swiss_alps3.jpg'],
      date: '2022-09-05',
      author: 'MountainExplorer',
      tags: ['Swiss Alps', 'Hiking', 'Nature'],
    },
    {
      id: 3,
      title: 'Discovering Heritage in India',
      content: `Embarking on a cultural journey through the diverse landscapes of India was an immersive experience. From the iconic Taj Mahal in Agra to the vibrant streets of Jaipur, India's rich history and traditions unfolded at every turn. Indulging in regional cuisines, exploring ancient temples, and witnessing traditional dance performances, join me as I uncover the mesmerizing tapestry of India's heritage.`,
      images: ['india1.jpg', 'india2.jpg', 'india3.jpg'],
      date: '2022-11-20',
      author: 'CulturalExplorer',
      tags: ['India', 'Cultural Heritage', 'Travel'],
    },
    // Add more posts as needed
  ];
  
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home posts={posts} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
