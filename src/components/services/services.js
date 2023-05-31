const API_KEY = '35113425-894140f70267936d7d418e310';
const BASE_URL = 'https://pixabay.com/api/';
    
export const getImages = (text)=>{
    fetch(`${BASE_URL}?q=${text}?key=${API_KEY}`)
      .then(res => res.json())
      .then(console.log);
}