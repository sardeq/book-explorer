import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get('https://openlibrary.org/search.json?q=programming')
            .then(response => setBooks(response.data.docs))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            {books.map((book, index) => {
                const id = book.key.split('/').pop();

                return (
                    <div key={index}>
                        {book.cover_i && (
                            <Link to={`/books/${id}`}>
                                <img
                                    src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
                                    alt={book.title}
                                />
                            </Link>
                        )}

                        <h3>{book.title}</h3>

                        <p>
                            {book.author_name
                                ? book.author_name.join(', ')
                                : 'Unknown Author'}
                        </p>
                    </div>
                );
            })}
        </div>
    );
};

export default Books;