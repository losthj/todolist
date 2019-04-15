import React from 'react';

class Welcome extends React.Component {
    //jsx 属性  React.creacteElement
    render(){
        const isLogin = true;
        return(
            <div className="this" htmlFor=""> 
                <h1>Hello React</h1>
                {
                    isLogin ? <p>你已经登录</p>:<p>请登录</p>
                } 
            </div>
        )
    }
}
export default Welcome;

 //三元表达式
  //for = htmlForm