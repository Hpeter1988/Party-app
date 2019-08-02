import React from 'react';


const Welcome = () => (
  <div className="well">
    <div className="welcomeHeader">
      <h1>Welcome to Party Rater!</h1>
      <p>You will get ratings about</p>
    </div>
    <div className="cdc">
      <div className="welcome">
        <div className="img"><img src="https://via.placeholder.com/100x100" alt="Pic comes here" /></div>
        <h4 className="titles">the VIBE</h4>
      </div>
      <div className="welcome">
        <div className="img"><img src="https://via.placeholder.com/100x100" alt="Pic comes here" /></div>
        <h4 className="titles">the CROWD</h4>
      </div>
      <div className="welcome">
        <div className="img"><img src="https://via.placeholder.com/100x100" alt="Pic comes here" /></div>
        <h4 className="titles">and the MUSIC</h4>
      </div>
    </div>
    <div>
      <h1 className="or">OR</h1>
    </div>
    <div className="endB">
      <button className="endButton" type="submit">End party</button>
    </div>
    <div>
      <h3 className="or">Your party identifier is</h3>
      <form className="idForm">
        <input label="id" id="id" />
      </form>
    </div>
  </div>
);
export default Welcome;
