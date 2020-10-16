import React, { Component } from "react";
import { Link } from 'react-router-dom';

export class Comments extends Component {
  state = {
    comments: [],
  };

  async componentDidMount() {
    const postId = this.props.match.params.post_id;
    const response = await fetch(`http://localhost:3333/post/${postId}/comments`);
    const comments = await response.json();
    this.setState({
      comments,
    });
  }

  render() {
    const { comments } = this.state;
    return (
      <div>
          <Link to={`/`}>Home</Link>
        {
            comments.map((comment) => {
                return <ul>
                    <li key={comment.id}>{comment.comment}</li>
                </ul>
            })
        }
      </div>
    );
  }
}

export default Comments;
