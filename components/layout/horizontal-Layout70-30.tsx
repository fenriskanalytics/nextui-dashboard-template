import React from 'react';

const HorizontalLayout70_30: React.FC = () => {
  return (
    <div style={{ display: 'flex', width: '100%' }}>
      <div style={{ width: '70%', padding: '20px', backgroundColor: '#f8f9fa' }}>
        <p>This is the left container that takes up 70% of the horizontal space.</p>
      </div>
      <div style={{ width: '30%', padding: '20px', backgroundColor: '#e9ecef' }}>
        <p>This is the right container that takes up 30% of the horizontal space.</p>
      </div>
    </div>
  );
};

export default HorizontalLayout70_30;
