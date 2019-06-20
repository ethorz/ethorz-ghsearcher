import axios from 'axios';
import {toast} from 'react-toastify';

const github = axios.create({
    baseURL: 'https://api.github.com/',
});

github.interceptors.response.use((response) => {
    return response;
}, function(error) {
    toast.error(`Request error: ${error.response.status}`);
    return Promise.reject(error);
});

const token = process.env.REACT_APP_TOKEN;
if (token) {
    github.defaults.headers.common.Authorization = `token ${token}`;
}

const getRepositories = (query) => github.get(`/search/repositories?q=${query}`);
const getBranches = (profile, repo) => github.get(`/repos/${profile}/${repo}/branches`);

export default {
    getRepositories,
    getBranches
}