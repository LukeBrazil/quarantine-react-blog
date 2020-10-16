import React, { Component } from "react";
import { Link } from 'react-router-dom';
import Comments from './Comments';
export class BlogPost extends Component {
  state = {
    post: {},
  };

  async componentDidMount() {
    const postId = this.props.match.params.post_id;
    const response = await fetch(`http://localhost:3333/post/${postId}`);
    const post = await response.json();
    this.setState({
      post,
    });
  }

  render() {
    const { post } = this.state;
    return (
      <div>
        <h2>{post.title}</h2>
        <h2>{post.content}</h2>
        <Link to={`/post/${post.id}/comments`}>Comments</Link>
      </div>
    );
  }
}

export default BlogPost;
