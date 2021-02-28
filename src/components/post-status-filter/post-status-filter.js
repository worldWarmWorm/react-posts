import React from 'react';
import {Button} from 'reactstrap';
import './post-status-filter.css';

const PostStatusFilter = () => {
    return (
        <div className="app-header d-flex">
            <Button color="info">Все</Button>
            <Button color="outline-secondary">По лайкам</Button>
        </div>
    )
}

export default PostStatusFilter;