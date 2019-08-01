/* eslint-disable react/prop-types */

import React, { Component } from 'react';
import axios from 'axios';


class Test extends Component {
  state = {
    test: 'Rendben',
  }

  mutat() {
    console.log(this.test);
    axios({
      method: 'get',
      url: 'http://beparty-env.xcz6zp8zmr.us-east-1.elasticbeanstalk.com/party',
      headers: { partyName: "Zsofi's party" },
    }).then((Response) => { console.log(Response)});
  }

  render() {
    this.mutat();
    return (
      <div className="landing">
        {this.test}
      </div>
    );
  }
}

export default Test;
