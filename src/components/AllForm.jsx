import React, { Component } from 'react';
import { connect } from 'react-redux';
import Posts from './Posts';
import EditComponent from './EditComponent';

class AllForm extends Component{
    render(){
        return(
            <div>
            <h1 className="post_heading">All Posts</h1>
            {this.props.posts.map((post) => (
            <div key={post.id}>
              {post.editing ? <EditComponent post={post} key={post.id} /> : <Posts post={post}
              key={post.id} />}
            </div>
          ))}
          </div>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        posts: state
    }
}

export default connect(mapStateToProps)(AllForm);