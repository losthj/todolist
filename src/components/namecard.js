import React from 'react';

//函数的声明
const NameCard =(props) =>{
    const {name,number,isHuman,tags} = props;
    return (
        <div className="alert alert-success">
        <div className="alert-heading">{name}</div>
        <ul>
            <li>电话：{number}</li>
            <li>{isHuman?'人类':'外星生物'}</li>
            <hr/>
            <p>
                {
                    tags.map((tag,index) =>(
                        <span className="badge badge-pill badge-primary" key={index}>{tag}</span>
                    ))
                }
            </p>
        </ul>
    </div>
    )
} 


// class NameCard extends React.Component{
//     render(){
//         const {name,number,isHuman,tags} = this.props;
//         return(
//             <div className="alert alert-success">
//                 <div className="alert-heading">{name}</div>
//                 <ul>
//                     <li>电话：{number}</li>
//                     <li>{isHuman?'人类':'外星生物'}</li>
//                     <hr/>
//                     <p>
//                         {
//                             tags.map((tag,index) =>(
//                                 <span className="badge badge-pill badge-primary" key={index}>{tag}</span>
//                             ))
//                         }
//                     </p>
//                 </ul>
//             </div>
          
//         )
//     }
// }
export default NameCard;