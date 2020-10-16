import React, { Component } from 'react'

export class BlogPost extends Component {
    state = {
        post: {}
    }

    async componentDidMount() {
        const postId = this.props.match.params.post_id
        const response = await fetch(`http://localhost:3000/post/${postId}`);
        const post = await response.json();
        this.setState ({
            post
        }) 
    }
    
    render() {
        const { post } = this.state
        return (
            <div>
                <h2>{post.content}</h2>
            </div>
        )
    }
}

export default BlogPost
