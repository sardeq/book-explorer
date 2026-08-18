import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BookDetails = () => {
    const { id } = useParams();
    const [book, setBook] = useState(null);

    useEffect(() => {
        axios.get(`https://openlibrary.org/works/${id}.json`)
            .then(response => {
                setBook(response.data);
            })
            .catch(error => console.error(error));
    }, [id]);

    if (!book) return <div>Loading...</div>;

    const description = typeof book.description === 'string'
        ? book.description
        : book.description?.value;

    return (
        <div>
            <h2>{book.title}</h2>

            {description && (
                <p>
                    <strong>Description: </strong>
                    {description}
                </p>
            )}

            {book.covers && book.covers.length > 0 && (
                <img
                    src={`https://covers.openlibrary.org/b/id/${book.covers[0]}-L.jpg`}
                    alt={book.title}
                />
            )}
        </div>
    );
};

export default BookDetails;