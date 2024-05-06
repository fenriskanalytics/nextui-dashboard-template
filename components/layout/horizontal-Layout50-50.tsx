import React from 'react';

const HorizontalLayout50_50: React.FC = () => {
  return (
    <div style={{ display: 'flex', width: '100%' }}>
      <div style={{ width: '50%', padding: '20px', backgroundColor: '#f0f0f0' }}>
        <p>This is the left container that takes up 50% of the horizontal space.</p>
      </div>
      <div style={{ width: '50%', padding: '20px', backgroundColor: '#d0d0d0' }}>
        <p>This is the right container that takes up 50% of the horizontal space.</p>
      </div>
    </div>
  );
};

export default HorizontalLayout50_50;
