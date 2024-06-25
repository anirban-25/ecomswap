import React from 'react';

const Success = () => {
  return (
    <div className="success-container">
      <div className="image-container ">
        <img src='/images/success.svg' alt="Success" className="success-image" />
      </div>
      <div className="content-container" >
        <h2  style={{ color: '#190041', fontFamily: 'FONTSPRING DEMO - Lufga SemiBold', fontSize: '40px',
              fontWeight: 800}}>We're completing our Targets Successfully</h2>
        <div className="stats">
          <div className="stat">
            <span className="stat-number" style={{ color: '#7850FF', fontWeight: 700 }}>2014</span>
            <p className="stat-description">Founded</p>
          </div>
          <div className="stat">
            <span className="stat-number" style={{ color: '#7850FF', fontWeight: 700 }}>70,000+</span>
            <p className="stat-description">Websites Sold Worldwide</p>
          </div>
          <div className="stat">
            <span className="stat-number" style={{ color: '#7850FF', fontWeight: 700 }}>100,000</span>
            <p className="stat-description">Users Worldwide</p>
          </div>
          <div className="stat">
            <span className="stat-number" style={{ color: '#7850FF', fontWeight: 700 }}>200+</span>
            <p className="stat-description">5-star reviews</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
