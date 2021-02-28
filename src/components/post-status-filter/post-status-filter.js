import React from 'react';
import './post-status-filter.css';

const PostStatusFilter = () => {
    return (
        <div className="app-header d-flex">
            <button type="button" className="btn btn-info">Все</button>
            <button type="button" className="btn btn-outline-secondary">По лайкам</button>
        </div>
    )
}

export default PostStatusFilter;