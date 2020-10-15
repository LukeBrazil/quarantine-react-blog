import React, { Component } from "react";

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
          return <ul>
              <li key={post.id}>{post.content}</li>
          </ul>;
        })}
      </div>
    );
  }
}

export default Blog;
