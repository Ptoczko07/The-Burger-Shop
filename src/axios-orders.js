import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-tcg-7e7d3.firebaseio.com/'
});

export default instance;