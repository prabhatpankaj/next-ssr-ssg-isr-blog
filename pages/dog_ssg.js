// pages/SSG.js
import React from 'react';
import fetch from 'isomorphic-unfetch';

const SSG = ({ imageUrl }) => {
  return (
    <div>
      <h1>Random Dog Image (SSG)</h1>
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
  };
}

export default SSG;
