import React from 'react';

interface GuessWhoCharacterProps {
  image: string;
  name: string;
}

const GuessWhoCharacter: React.FC<GuessWhoCharacterProps> = ({ image, name }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img src={image} alt={name} className="rounded-full w-32 h-32 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
    </div>
  );
};

export default GuessWhoCharacter;
