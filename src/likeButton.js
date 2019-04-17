import React from 'react';

class LikeButton extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            likes:0
        }
        this.inlike = this.inlike.bind(this);
    }

    inlike(){
        this.setState({
            likes: ++this.state.likes
        });
    }

    render(){
        return(
            <div className="likes-buttton-component">
                <button type="button" className="btn btn-outline-primary btn-lg" onClick={this.inlike}>
                 点赞 {this.state.likes}
                </button>
            </div>
        )
    }
}

export default LikeButton;