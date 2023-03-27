import React from 'react';

export default function Project({ imageSrc, altText }) {
  return (
    <img
      src={imageSrc}
      alt={altText}
    />
  );
}
