import React from 'react';
import Navbar from '../components/Navbar';
import weddingpic1 from '../assets/weddingpic1.jpg';

const Home = () => {
  return (
    <div
      className="bg-cover bg-center bg-no-repeat h-screen"
      style={{ backgroundImage: `url(${weddingpic1})` }}
    >
      <Navbar />
    </div>
  );
};

export default Home;