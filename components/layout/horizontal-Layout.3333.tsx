import React from 'react';

const HorizontalLayoutThirds: React.FC = () => {
  return (
    <div style={{ display: 'flex', width: '100%' }}>
      <div style={{ width: '33.33%', padding: '20px', backgroundColor: '#e8e8e8' }}>
        <p>This is the first container that takes up one-third of the horizontal space.</p>
      </div>
      <div style={{ width: '33.33%', padding: '20px', backgroundColor: '#cccccc' }}>
        <p>This is the second container that also takes up one-third of the horizontal space.</p>
      </div>
      <div style={{ width: '33.33%', padding: '20px', backgroundColor: '#b0b0b0' }}>
        <p>This is the third container that takes up the remaining third of the horizontal space.</p>
      </div>
    </div>
  );
};

export default HorizontalLayoutThirds;
