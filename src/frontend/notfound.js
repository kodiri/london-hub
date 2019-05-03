import React from 'react';
import { Link } from 'react-router-dom';

export default function notFound() {
    return (
        <div>
            <h1>Oooops, something is broken</h1>
            <Link to='/'>return to home</Link>
        </div>
    )
}