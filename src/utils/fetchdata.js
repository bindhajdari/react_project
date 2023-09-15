export const exerciseOptions =  {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'f468a2e776msh871d7475222c0d9p15c67ejsn2556e6ce23ef',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};



export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'f468a2e776msh871d7475222c0d9p15c67ejsn2556e6ce23ef',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};



export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}