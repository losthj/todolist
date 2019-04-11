import React, { Component } from 'react';
import TodoItem from './Todoitem';


class TodoList extends Component {
 // state    定义数据存储

 //es6 的语法
 constructor(props){
    super(props);
    this.state ={
      list:[ ],
      inputValue:''
    }
    this.handInputChange=this.handInputChange.bind(this);
    this.handleBtnClick=this.handleBtnClick.bind(this);
    this.handleDelete=this.handleDelete.bind(this);
 }

  handleBtnClick(){
    this.setState({
      list:[...this.state.list,this.state.inputValue],
      inputValue:''
    });
  }

  handInputChange(e){
    this.setState({
      inputValue:e.target.value
    })
  }

 
  //父组件通过属性的形式向子组件传递参数
  //子组件通过props接受父组件传递过来的参数

  handleDelete(index){
    const list = [...this.state.list];  
    list.splice(index,1);
    this.setState({
      list
    })
  }

  getTodoItems(){
    return(
      this.state.list.map((item,index) =>{
        return (
          <TodoItem key={index} delete={this.handleDelete} content={item} index={index} />
        )
      })
    )
  }

  render() {
    return (
      <React.Fragment>
        <div>
            <input type="text" value={this.state.inputValue} onChange={this.handInputChange}/>
            <button onClick={this.handleBtnClick}>add</button>
          </div>
          <ul>
            {this.getTodoItems()}
          </ul>
      </React.Fragment>
     
    );
  }
}

export default TodoList;
