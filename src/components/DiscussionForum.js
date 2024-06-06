import React, { useState } from 'react';
import './DiscussionForum.css';

function DiscussionForum() {
  const [posts, setPosts] = useState([
    { name: 'Alice', topicName: 'React Basics', content: 'React is a JavaScript library for building user interfaces.' },
    { name: 'Bob', topicName: 'CSS Grid', content: 'CSS Grid is a powerful layout system available in CSS.' },
    { name: 'Charlie', topicName: 'JavaScript ES6', content: 'ES6 introduced many new features such as arrow functions, classes, and template literals.' }
  ]);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [topicName, setTopicName] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { name, topicName, content };
    setPosts([...posts, newPost]);
    setName('');
    setTopicName('');
    setContent('');
    setShowForm(false);
  };

  return (
    <div className="discussion-forum-container">
      <h2>Discussion Forum</h2>
      <button onClick={() => setShowForm(true)} className="new-post-button">New Post</button>
      {showForm && (
        <form className="post-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input 
              type="text" 
              id="name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="topicName">Topic Name:</label>
            <input 
              type="text" 
              id="topicName" 
              value={topicName} 
              onChange={(e) => setTopicName(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="content">Content:</label>
            <textarea 
              id="content" 
              value={content} 
              onChange={(e) => setContent(e.target.value)} 
              required 
            />
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      )}
      <div className="posts-container">
        {posts.map((post, index) => (
          <div key={index} className="post">
            <h3>{post.topicName}</h3>
            <p><strong>{post.name}</strong></p>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DiscussionForum;