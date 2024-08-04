import axios from "axios";
const instance = axios.create({
    baseURL: 'https://vercel.com/akashs-projects-1dab1190/learning-deployment/syngegyp7cJFYgVLPqxqxbz3HXxY',
    // baseURL: 'http://localhost:4444',
    withCredentials: true
});

export default instance;
