import React, { Component } from "react";
import { Link } from "react-router-dom";

class Blog extends Component {
  state = {
    blogPosts: [],
  };
  async componentDidMount() {
    const response = await fetch(`http://127.0.0.1:3333/`);
    const blogPosts = await response.json();
    console.log(blogPosts);
    this.setState({
      blogPosts,
    });
  }

  render() {
    const { blogPosts } = this.state;
    return (
      <div>
        <h1>Blog Posts:</h1>
        {blogPosts.map((post) => {
          return (
            <ul>
              <li key={`post-${post.id}`}>
                <Link to={`/post/${post.id}`}>{post.title}</Link>
              </li>
            </ul>
          );
        })}
      </div>
    );
  }
}

export default Blog;
