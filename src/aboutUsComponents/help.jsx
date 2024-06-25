import React from 'react';

const Help = () => {
  return (
    <div className="help-section">
      <h2 className="help-title text-center">
        We help you every step of the way. Whether you&apos;re a buyer or founder, <span className="highlight">Ecomswap.com</span> helps you succeed.
      </h2>
      <p style={{ margin: '60px 0' }}></p>
      <div className="help-features">
        <div className="feature-item">
          <div className="feature-number-box">
            <div className="feature-number">01</div>
          </div>
          <h3 className="feature-title">Entrepreneurship</h3>
          <p className="feature-description">
            We&apos;re advocates of entrepreneurs everywhere, supporting your wins, big and small.
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-number-box">
            <div className="feature-number">02</div>
          </div>
          <h3 className="feature-title">Trust</h3>
          <p className="feature-description">
            We&apos;re there for you every step of the acquisition process, guaranteed.
          </p>
        </div>
        <div className="feature-item">
          <div className="feature-number-box">
            <div className="feature-number">03</div>
          </div>
          <h3 className="feature-title">Transparency</h3>
          <p className="feature-description">
            What you see is what you get. We underpromise and overdeliver, every time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Help;
