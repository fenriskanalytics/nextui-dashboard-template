import React from 'react';

const HorizontalLayout65_35: React.FC = () => {
  return (
    <div style={{ display: 'flex', width: '100%' }}>
      <div style={{ width: '65%', padding: '20px', backgroundColor: '#f8f9fa' }}>
        <p>This is the left container that takes up 65% of the horizontal space.</p>
      </div>
      <div style={{ width: '35%', padding: '20px', backgroundColor: '#e9ecef' }}>
        <p>This is the right container that takes up 35% of the horizontal space.</p>
      </div>
    </div>
  );
};

export default HorizontalLayout65_35;
