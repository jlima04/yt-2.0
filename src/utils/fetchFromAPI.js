import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '70fa312881mshb351039314639bbp16d072jsnb62f9d641f7a',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  

  export const fetchFromAPI = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
  }