import React from 'react';


const Landing = () => (
  <div className="landing">
    <div>
      <h1 className="or">Add party name!</h1>
    </div>
    <div className="landingForm">
      <form className="partyNameForm">
        <input label="partyName" id="partyName" />
      </form>
    </div>
    <div className="nameB">
      <button className="submitButton" type="submit">Submit</button>
    </div>
  </div>
);

export default Landing;
