import React from 'react';

const Home = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <img 
                src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800&auto=format&fit=crop" 
                alt="Books" 
                style={{ maxHeight: '300px', borderRadius: '8px', marginBottom: '20px' }} 
            />
            <h1>Welcome to Book Explorer!</h1>
            <p>Browse books and view their details using Open Library API</p>
        </div>
    );
}

export default Home;