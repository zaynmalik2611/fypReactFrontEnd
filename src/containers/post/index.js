import React, { Component } from 'react';
import axios from 'axios';
import './style.css';

class Post extends Component {
    state = { 
        posts: []
    }
    async componentDidMount() {
        const { data: postsData} = await axios.get('http://localhost:5000/post');
        this.setState({posts: postsData});
    }
    render() {
        
        return (
            <React.Fragment>
                {this.state.posts.map(
                    post => 
                    <div key={post._id} className="Post">
                        <div className="PostInfo">
                            <div className="CommunityName">Schizophrenia</div>
                            <div className="OP">Posted by {post.author.username}</div>
                            <div className="TimePosted">4 hours ago</div>
                        </div>  
                        <div className="PostHeader">
                            <h3>{post.title}</h3>
                        </div>
                        <div className="PostContent">
                            <p>{post.content}</p>
                        </div>
                        <div className="DivBtns">
                            <button className="BtnStyling">Comment</button>
                            <button className="PostBtns BtnStyling">Share</button>
                        </div>
                    </div>
                )}
            </React.Fragment>
        );
    }
}
 
export default Post;

