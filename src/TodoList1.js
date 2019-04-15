import React, { Component } from 'react';
import TodoItem from './Todoitem';


class TodoList extends Component {
 // state    定义数据存储

 //es6 的语法
 constructor(props){
    super(props);
    this.state ={
      // list:[
      //   'learn react',
      //   'learn english',
      //   'learn vue'
      // ],

      list:[ ],
      inputValue:''
    }
 }

  handleBtnClick(){
    this.setState({
      list:[...this.state.list,this.state.inputValue],
      inputValue:''
    });
    
    

    // this.setState({
    //   list:[...this.state.list,'hello world']  //...展开运算付
    // })
    //this.state.list.push('hello world');
  }

  handInputChange(e){
    this.setState({
      inputValue:e.target.value
    })
   // console.log(e.target.value);
  }

  // handleItemClick(index){
  //  // console.log(index); 
  //  const list = [...this.state.list];  //复制一个副本 再调整
  //  list.splice(index,1);
  //  this.setState({
  //    //list:list
  //    list
  //  })
  // }
 
  //父组件通过属性的形式向子组件传递参数
  //子组件通过props接受父组件传递过来的参数

  handleDelete(index){
    const list = [...this.state.list];  
    list.splice(index,1);
    this.setState({
      list
    })

    //console.log('delete');
   // console.log(index);
  }

  render() {
    return (
      <div>
        <div>
            <input type="text" value={this.state.inputValue} onChange={this.handInputChange.bind(this)}/>
            <button onClick={this.handleBtnClick.bind(this)}>add</button>
          </div>
          <ul>
            {/* <li>learn react</li>
            <li>learn english</li> */}

            {
              this.state.list.map((item,index) =>{
                return <TodoItem key={index} delete={this.handleDelete.bind(this)} content={item} index={index} />

                //return <li key={index} onClick={this.handleItemClick.bind(this,index)}>{item}</li>
              })
            }
          </ul>
      </div>
     
    );
  }
}

export default TodoList;
