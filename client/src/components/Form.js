import React from 'react';
import api from '../api'

const Form = (props) => {

    const initialState = {
        title: "",
        author: "",
        description: "",
    };

    const handleInputChange = (event) => {
        const newBook = event.target.value
        props.setBook({
            ...props.book,
            [event.target.name]: newBook
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        await api.insertBook(props.book);
        window.alert(`Added book ${props.book.title} by ${props.book.author}.`)
        props.setBook({ ...initialState })
        props.fetchData();
    }

    const updateBook = async (event) => {
        event.preventDefault();
        await api.updateBook(props.book._id, props.book);
        props.setBook({ ...initialState });
        props.fetchData();
        window.alert('Book updated!')
    }

    const deleteBook = async (event) => {
        event.preventDefault();
        await api.deleteBook(props.book._id);
        props.fetchData();
        props.setBook({ ...initialState });
        window.alert('Book deleted!');
    }

    return (
        <div>
            <h1>Add Book</h1>
            <form action="/book" method="POST">
                <div>
                    <label>Title </label>
                </div>
                <input name="title" value={props.book.title} onChange={handleInputChange} />
                <div>
                    <label>Author </label>
                </div>
                <input name="author" value={props.book.author} onChange={handleInputChange} />
                <div>
                    <label>Description </label>
                </div>
                <textarea name="description" value={props.book.description} onChange={handleInputChange} />
                <div>
                    <button className="submit" onClick={handleSubmit} value="Save New">Save New</button>
                    <button className="submit" onClick={updateBook} value="Update">Update</button>
                    <button className="submit" onClick={deleteBook} value="Delete">Delete</button>

                </div>
            </form>
        </div>
    );
};

export default Form;