let API_KEY = '35113425-894140f70267936d7d418e310';
let BASE_URL = 'https://pixabay.com/api/';

const fetchAPI = (value, page) => {
  setTimeout(() => {
    fetch(
      `${BASE_URL}?key=${API_KEY}&image_type=photo&orientation=horizontal&q=${value}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(res => res.json())
      .then(data => {
        const collection = data.hits;
        this.setState({ collection });
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  }, 500);
};
export const api = {
  fetchAPI,
};
export default api;