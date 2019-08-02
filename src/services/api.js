import axios from 'axios';

const baseBackendAdress = '';
// eslint-disable-next-line import/prefer-default-export
export function fetchMyParty(payload) {
  return axios({
    method: 'put',
    url: 'http://beparty-env.xcz6zp8zmr.us-east-1.elasticbeanstalk.com/findmyparty',
    data: payload,
  });
}
