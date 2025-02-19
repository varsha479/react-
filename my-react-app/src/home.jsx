import React from 'react';

const Home = () => {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', 
      width: '100vw',
      textAlign: 'center', 
      flexDirection: 'column',
      backgroundColor: '#121212', 
      color: 'white' 
    }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Varsha</h1>
      <p style={{ fontSize: '1rem', color: '#00bcd4' }}>Contact: varsh123@gmail.com</p>
      <p style={{ fontSize: '1rem', color: '#00bcd4'}}>Phone: +1234567890</p>
    </div>
  );
};

export default Home;