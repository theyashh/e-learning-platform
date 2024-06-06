import React from 'react';
import './Courses.css';

const courses = [
  {
    id: 1,
    image: '/react.jpg',
    title: 'React.js Basics',
    description: 'Learn the basics of React.js, a powerful JavaScript library for building user interfaces.',
    rating: 4.5,
    views: 120000
  },
  {
    id: 2,
    image: '/node.png',
    title: 'Advanced Node.js',
    description: 'Dive deeper into Node.js and learn advanced concepts for backend development.',
    rating: 4.0,
    views: 150000
  },
  {
    id: 3,
    image: '/css.png',
    title: 'Mastering CSS Grid',
    description: 'Master the CSS Grid layout module and build responsive web layouts with ease.',
    rating: 4.8,
    views: 110000
  },
  {
    id: 4,
    image: '/mern.jpg',
    title: 'Fullstack with MERN',
    description: 'Become a Fullstack Developer by mastering MongoDB, Express, React, and Node.js.',
    rating: 4.7,
    views: 140000
  },
  {
    id: 5,
    image: '/js.png',
    title: 'JavaScript ES6+',
    description: 'Upgrade your JavaScript skills with the latest features from ES6 and beyond.',
    rating: 4.6,
    views: 130000
  },
  {
    id: 6,
    image: '/ts.png',
    title: 'TypeScript for Beginners',
    description: 'Get started with TypeScript and understand its benefits for large-scale JavaScript applications.',
    rating: 4.3,
    views: 160000
  },
  {
    id: 7,
    image: '/webpack.png',
    title: 'Webpack & Module Bundlers',
    description: 'Learn how to use Webpack and other module bundlers to optimize your web projects.',
    rating: 4.1,
    views: 125000
  },
  {
    id: 8,
    image: '/rest.png',
    title: 'Building REST APIs',
    description: 'Understand how to build and consume RESTful APIs with Node.js and Express.',
    rating: 4.9,
    views: 175000
  },
  {
    id: 9,
    image: '/graphql.png',
    title: 'GraphQL Basics',
    description: 'Learn the fundamentals of GraphQL and how it differs from traditional REST APIs.',
    rating: 4.4,
    views: 115000
  },
  {
    id: 10,
    image: '/nextJS.png',
    title: 'Next.js for React',
    description: 'Get started with Next.js and learn how to build server-side rendered React applications.',
    rating: 4.5,
    views: 145000
  }
];

function Courses() {
  return (
    <div className="courses-grid">
      {courses.map(course => (
        <div key={course.id} className="course-card">
          <img src={course.image} alt={course.title} className="course-image" />
          <h3 className="course-title">{course.title}</h3>
          <p className="course-description">{course.description}</p>
          <div className="course-footer">
            <div className="course-rating">
              {'⭐'.repeat(Math.floor(course.rating))}
              {course.rating % 1 !== 0 && <span>⭐</span>}
              <span> ({course.views.toLocaleString()} views)</span>
            </div>
            <div className="course-buttons">
              <button className="course-btn">Add to Cart</button>
              <button className="course-btn">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Courses;
