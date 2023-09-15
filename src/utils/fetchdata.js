export const exerciseOptions =  {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'defb520e5cmsh0b9b0692044e05dp1572b7jsnb20ae3195e62',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};



export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'defb520e5cmsh0b9b0692044e05dp1572b7jsnb20ae3195e62',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};



export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}