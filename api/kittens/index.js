import axios from 'axios';

function getKittens () {
  return axios.get('http://localhost:3001/');
}

export {
  getKittens
};