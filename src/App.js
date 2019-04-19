import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import NameCard from './components/namecard';
import ThemeContext from './theme-context'
import ThemendBar from './components/ThemedBar'

const tags=['恐龙','足球小子'];

const themes ={
  light:{
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
      theme:'light'
    }
this.changeTheme = this.changeTheme.bind(this);
  }

  changeTheme(theme){
    this.setState({
      theme,
    })
  }
render() {
    return (
      <ThemeContext.Provider value={themes[this.state.theme]}>
      <div>
        <NameCard name="huangjian" number={123112312} isHuman tags={tags} />

        <a href="#theme-switcher" className="btn btn-light"
        onClick={() => {this.changeTheme('light')}}
        >浅色主题</a>
        <a href="#theme-switcher" className="btn btn-secondary"
        onClick={() => {this.changeTheme('dark')}}
        >深色主题</a>
      <ThemendBar></ThemendBar>
      </div>
      </ThemeContext.Provider>
    );
  }
}

export default App;
