
// PostList.js
import React from 'react';

const PostList = ({ posts }) => {
    return (
      <div>
        <h1>Latest Posts</h1>
        <ul>
          {posts.map(post => (
            <li key={post.id1}>
              <div>
                <h2>
                  <a href={`/post/${post.id}`}>{post.title}</a>
                </h2>
                <img src='https://www.kiwi.com/stories/wp-content/uploads/2017/09/shutterstock_401754184-1920x1280.jpg' width={500} height={400}></img>
                <p>{post.content}</p>
                <p>{post.summary}</p>
                <p>Published on: {post.date}</p>
                <p>Tags: {post.tags.join(', ')}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default PostList;
  