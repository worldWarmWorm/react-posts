import React from 'react';

import AppHeader from '../app-header';
import SearchPannel from '../search-pannel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';
import styled from 'styled-components';

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`;

const CostomAppBlock = styled(AppBlock)`
    background-color: purple;
`;

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
        <AppBlock>
            <AppHeader/>
            <div className="d-flex search-pannel">
                <SearchPannel/>
                <PostStatusFilter/>
            </div>
            <PostList posts={data}/>
            <PostAddForm/>
        </AppBlock>
    )
}

export default App;