// pages/CSR.js
import React, { useEffect, useState } from 'react';

const CSR = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchDogImage = async () => {
      const res = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await res.json();
      setImageUrl(data.message);
    };
    fetchDogImage();
  }, []);

  return (
    <div>
      <h1>Random Dog Image (CSR)</h1>
      {imageUrl && <img src={imageUrl} alt="Random Dog" />}
    </div>
  );
};

export default CSR;
