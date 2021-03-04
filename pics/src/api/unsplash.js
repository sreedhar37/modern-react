import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID avt5p6jNHKeaPlFmGMbLTn716O1n-cEZguj2taG0SSs',
    }
});