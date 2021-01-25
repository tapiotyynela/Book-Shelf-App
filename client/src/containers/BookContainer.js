import '../App.css';
import BookList from '../components/BookList'

const BookContainer = () => {

    return (
        <div className="App">
            <div className="flex-container">
                <BookList />
            </div>
        </div>
    );
}

export default BookContainer;