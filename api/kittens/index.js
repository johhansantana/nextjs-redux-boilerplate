import axios from 'axios';
/**
 * Get the response of the api call to get the kitten list.
 * @return {AxiosPromise}
 */
function getKittens () {
  return axios.get('https://nextjs-express-boilerplate-vxqbpvxtnf.now.sh/');
}

export {
  getKittens
};