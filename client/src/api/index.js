import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8000/api',
})

export const insertBook = (book) => api.post(`/book`, book)
export const updateBook = (id, book) => api.put(`/book/${id}`, book)
export const deleteBook = (id) => api.delete(`/book/${id}`)
export const getAllBooks = () => api.get(`/books`)
export const getOneBook = (id) => api.get(`/book/${id}`)


const apis = {
    insertBook,
    getAllBooks,
    getOneBook,
    updateBook,
    deleteBook
}

export default apis