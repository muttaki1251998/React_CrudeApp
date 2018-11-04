import React, { Component } from 'react';
import { connect } from 'react-redux';

class PostForm extends Component{
    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.getTitle.value;
        const message = this.getMessage.value;
        const data = {
            id: new Date(),
            title, 
            message,
            editing: false
        } 
        this.props.dispatch({
            type: 'ADD_POST',
            data
        });
        this.getTitle.value = '';
        this.getMessage.value = '';
    }

    // Refs are created using React.createRef() and attached to React elements via the ref attribute. 
    // Refs are commonly assigned to an instance property when a component is constructed so they can be referenced throughout the component.
    
    render(){     

        return(
            <div className="post-container">
            <h1 className="post_heading">Create Post</h1>
            <form className="form" onSubmit={this.handleSubmit} >
             <input required type="text" ref={(input) => this.getTitle = input}
             placeholder="Enter Post Title" /><br /><br />
             <textarea required rows="5" ref={(input) => this.getMessage = input}
             cols="28" placeholder="Enter Post" /><br /><br />
             <button>Post</button>
            </form>
          </div>
        );
    }
}

export default connect()(PostForm);
/*

Hello whiteness my old friend
I'm sorry I lost my way at the end
But it is you who keeps meee gooing
left a seed while I was sleeping
And a vision
still remains.
In restless dreams we walked alone
On the brown street of delusions
Beneath the halo of cancer-coats
You turn my cringes into sugar-coats
With a white light of silence. 



*/