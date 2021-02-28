import React from 'react';

import AppHeader from '../app-header';
import SearchPannel from '../search-pannel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import './app.css';

const App = () => {
    const data = [
        {
            id: 'wrq',
            label: "Going to learn React",
            important: false
        },
        {
            id: 'wyt',
            label: "Going to learn React2",
            important: true
        },
        {
            id: 'ghf',
            label: "Going to learn React3",
            important: false
        }
    ];

    return (
        <div className="app">
            <AppHeader/>
            <div className="d-flex search-pannel">
                <SearchPannel/>
                <PostStatusFilter/>
            </div>
            <PostList posts={data}/>
            <PostAddForm/>
        </div>
    )
}

export default App;