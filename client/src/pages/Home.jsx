import React from 'react';
import Navbar from '../components/Navbar';
import weddingpic1 from '../assets/weddingpic1.jpg';
import Awards from '../components/Awards';
import Prewedding from '../components/Prewedding';

const Home = () => {
  return (
    <div>
       <div
      className="bg-cover bg-center bg-no-repeat h-screen flex flex-row items-center justify-between"
      style={{ backgroundImage: `url(${weddingpic1})` }}
      >
        <Navbar />
      </div>
      <Awards />
      <Prewedding />
    </div>
  );
};

export default Home;
