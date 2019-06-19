import axios from 'axios';

const github = axios.create({
    baseURL: 'https://api.github.com/',
});

const token = process.env.REACT_APP_TOKEN;
if (token) {
    github.defaults.headers.common.Authorization = `token ${token}`;
}

const getRepositories = (query) => github.get(`/search/repositories?q=${query}`);

export default {
    getRepositories
}