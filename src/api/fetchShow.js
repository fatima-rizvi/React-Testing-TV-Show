import axios from 'axios';

export const fetchShow = () => {
    return axios
      .get(
        "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
      )
      .then(res => {
        console.log('api results: ', res)
        return res;
      })
      .catch(err => {
        console.log('Error: ', err)
        return err;
      });
  };
