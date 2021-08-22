import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/?image_type=photo&orientation=horizontal';
async function getPictures(query, page) {
  const {
    data: { hits },
  } = await axios.get(
    `&q=${query}&page=${page}&per_page=12&key=20826404-6f4526022880cc6e23fc40539`,
  );
  return hits;
}

export default getPictures;
