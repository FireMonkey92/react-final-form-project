import React from 'react';
import { Link } from 'react-router-dom';

const header = () => {
    return (
        <div className='flex_container'>
            <div className='title-text'>React-Final-Form</div>
            <div className='links'>
                <Link to='/login'>login</Link>
                <Link to='/reg'>Registration</Link>
            </div>
        </div>
    )
};

export default header;