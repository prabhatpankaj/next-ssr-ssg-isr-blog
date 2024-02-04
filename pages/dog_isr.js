// pages/ISR.js
import React from 'react';
import fetch from 'isomorphic-unfetch';

const ISR = ({ imageUrl }) => {
  return (
    <div>
      <h1>Random Dog Image (ISR)</h1>
      <img src={imageUrl} alt="Random Dog" />
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch('https://dog.ceo/api/breeds/image/random');
  const data = await res.json();

  return {
    props: {
      imageUrl: data.message,
    },
    revalidate: 60, // Re-generate every 60 seconds
  };
}

export default ISR;
