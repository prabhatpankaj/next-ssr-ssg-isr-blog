// pages/SSR.js
import React from 'react';
import fetch from 'isomorphic-unfetch';

const SSR = ({ imageUrl }) => {
  return (
    <div>
      <h1>Random Dog Image (SSR)</h1>
      <img src={imageUrl} alt="Random Dog" />
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch('https://dog.ceo/api/breeds/image/random');
  const data = await res.json();

  return {
    props: {
      imageUrl: data.message,
    },
  };
}

export default SSR;