import React from 'react';
import GoTCard from '../GoTCard';
import './style.css';

function Main({ images, handler, clickLost }) {
  console.log(images);
  
  const className = clickLost ? 'character animate shake' : 'character'
  
  return (
    <main>
      <div id="image-wrapper">
        {images.map(image => (
            <AvengersCard 
              className={className}
              key={image.id} 
              id={image.id}
              name={image.name}
              image={image.image} 
              handler={handler}
              clickLost={clickLost}
            ></GoTCard>
          )
        )}
      </div>
    </main>
  );
}

export default Main;