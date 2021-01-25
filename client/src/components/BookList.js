import React, { useEffect } from 'react';
import api from '../api'
import Form from '../components/Form'
import { useState } from 'react';

const BookList = () => {
    const [books, setBooks] = useState([])
    const [book, setBook] = useState({
        title: '',
        author: '',
        description: ''
    });

    async function fetchData() {
        const books = await api.getAllBooks();
        const booklist = books.data.data;
        setBooks(booklist);
    }

    useEffect(() => {
        fetchData();
    }, [])

    const selectBook = async (id) => {
        await api.getOneBook(id)
            .then(book => setBook(...book.data.data));
    }

    return (
        <div className="flex-container">
            <Form fetchData={fetchData} book={book} setBook={setBook} />
            <div className="booklist">
                <h1>Books</h1>
                <br />
                <ul>
                    {books.map(book =>
                        <li key={book._id} onClick={() => selectBook(book._id)}>Title: {book.title} ({book.author})</li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default BookList;