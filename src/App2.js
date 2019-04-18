import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NameCard from './components/namecard';
import DigitalClock from './components/DigtalClock';
import CommentBox from './components/CommentBox'
import CommentList from './components/CommentList'
import LikeButton from './likeButton'

const tags=['恐龙','足球小子'];

//定义一个react组件
class App extends Component {
  constructor(props){
    super(props)
    this.state={
      comments:['this is my first reply']
    }
    this.addComment = this.addComment.bind(this);
  }

  addComment(comment){
    this.setState({
      comments:[...this.state.comments,comment]
    })
}  
render() {
    return (
      <div>
        <NameCard name="huangjian" number={123112312} isHuman tags={tags} />
        <LikeButton />
        <DigitalClock />

        <CommentList comments={this.state.comments} />
        <CommentBox commentsLength={this.state.comments.length}
         onAddComment={this.addComment}
        />


      </div>
    );
  }
}

export default App;
