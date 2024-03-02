// Home.js
import React from 'react';
import PostList from './PostList';
import './Home.css';

const Home = ({ posts }) => {
  return (
    <div>
      <PostList posts={posts} />
    </div>
  );
};

export default Home;
