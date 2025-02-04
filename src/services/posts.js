import axios from 'axios'
const baseUrl = 'https://kurylenko-photography-backend.onrender.com/api/posts'

axios.defaults.withCredentials = true; // Include credentials (like cookies) in the request
axios.defaults.crossDomain = true; // Enable cross-domain requests

const getPost = async (id) => axios.get(baseUrl + `/${id}`).then(response => response.data)

const getAllPosts = async () => axios.get(baseUrl).then(response => response.data)

const createPost = async (newPost) => axios.post(baseUrl, newPost).then(response => response.data)

const deletePost = async (id) => axios.delete(baseUrl + `/delete/${id}`).then(response => response.data)

const updatePost = async (id, newPost) => axios.put(baseUrl + `/update/${id}`, newPost).then(response => response.data)

export default { getPost, getAllPosts, createPost, deletePost, updatePost }