import React from "react";

const FaceRecognition = ({ imageUrl, boxes }) => {
  return (
    <div className='center ma'>
      <div className='absolute'>
        <img
          id='image'
          alt='pic'
          src={imageUrl}
          width='500px'
          height='auto'
          className='mt3'
        />
        {boxes.map((box) => (
          <div
            key={box.topRow}
            className='flex absolute flex-wrap center pointer shadow-2 ba bw2 b--light-blue '
            style={{
              top: box.topRow,
              left: box.leftCol,
              right: box.rightCol,
              bottom: box.bottomRow,
            }}></div>
        ))}
      </div>
    </div>
  );
};

export default FaceRecognition;
