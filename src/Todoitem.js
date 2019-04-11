import React from 'react';

//父子组件




class TodoItem extends React.Component{
//子组件如果想和父组件通讯，子组件要调用父组件传递过来的方法

    constructor(props){
        super(props);
        this.handleDelete=this.handleDelete.bind(this);
    }

    handleDelete(){
         this.props.delete(this.props.index);
       // console.log(this.props.index)
    }



    render(){
        const {content} = this.props;
        return(
             <div onClick={this.handleDelete}>
            {content}
            </div>
            // <div onClick={this.handleDelete}>
            // {this.props.content}
            // </div>
        )
           
    }
}
export default TodoItem;