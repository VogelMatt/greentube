import axios from 'axios';

const Base_URL= 'https://youtube-v3-lite.p.rapidapi.com/search';

// const options = {
//     params: {    
        
//   },
//   headers: {
//     'X-RapidAPI-Key': 
//     'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
//   }
// };

const options = {
  params: {
    maxResults: '50'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v3-lite.p.rapidapi.com'
  }
};


export const fetchFromAPI = async (url) => {
  const {data} =  await axios.get(`${Base_URL}/${url}`, options);

  return data;
  }