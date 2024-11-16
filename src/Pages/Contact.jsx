import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className='flex flex-col items-center justify-center text-center min-h-screen'>
            <h1 className='text-2xl font-semibold'>This page is under Constraction</h1>
            <Link to={'/'} className='text-lg mt-3 text-blue-600 font-medium hover:underline'>Please Go back</Link>
        </div>
    );
};

export default Contact;