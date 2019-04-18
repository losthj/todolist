import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NameCard from './components/namecard';
import ThemeContext from './theme-context'

const tags=['恐龙','足球小子'];

const thems ={
  ligh:{
    classname:'btn btn-primary',
    bgColor:'#eeeeee',
    color:'#000'
  },
  dark:{
    classname:'btn btn-light',
    bgColor:'#222222',
    color:'#fff'
  }
}


class App extends Component {
  constructor(props){
    super(props)
    this.state={

    }

  }


render() {
    return (
      <div>
        <NameCard name="huangjian" number={123112312} isHuman tags={tags} />

        <a href="#theme-switcher" className="btn btn-light">浅色主题</a>
        <a href="#theme-switcher" className="btn btn-secondary">深色主题</a>

      </div>
    );
  }
}

export default App;
