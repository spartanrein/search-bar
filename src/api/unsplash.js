import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID 8v-5o_-IcKyMBSslGyGERmq_ScfaWt5WnAnrjAgOdUc'
    }
});
