import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NameCard from './components/namecard';
import LikeButton from './likeButton'

const tags=['恐龙','足球小子'];

//定义一个react组件
class App extends Component {
  render() {
    return (
      <div>
        <NameCard name="huangjian" number={123112312} isHuman tags={tags} />

        <LikeButton />

      </div>
    );
  }
}

export default App;
