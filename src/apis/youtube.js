import axios from 'axios';
const KEY = 'AIzaSyBqntetfmYurdYtVdXLWieoFj4QMHAmD18';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});


