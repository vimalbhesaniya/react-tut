import React,{useState,useEffect} from "react";

// function User(props){
//     return(
//         <div className="user">
//             <h1>User componets</h1>
//             <button onClick={props.data}>Call Data Function </button>
//         </div>
//     )
// }

// class User extends React.Component{
//     render() {
//         console.log("render method",this.props);
//         return (
//              <div className="User">
//                 <h1> User component {this.props.name}</h1>
//              </div>
//         );
//     }
// }

// class User extends React.Component{
//     constructor(){
//         super();
//         this.state={
//             email:"vishala@gmail.com"
//         }
//     }
//     render() {
//         console.log("render method",this.state.email);
//         return (
//              <div className="User">
//                 <h1> User component {this.props.name}</h1>
//                 <button onClick={()=>this.setState({email:"vishu@gmail.com"})}>Update EMail</button>
//              </div>
//         );
//     }
// }

// function User(props){
//   useEffect(()=>{
//     // console.log("useEffect");
//     alert("Count : "+ props.count)
//   },[props.count])
//   return(
//     <div className='User'>
//       <h1>Count props : {props.count}</h1>
//       <h1>Data props : {props.data}</h1>
//     </div>
//   )
// }

// function User(props){
//   const data="vishu";
//   return(
//     <div className='User'>
//       <h1>User Name : {data}</h1>
//       <button onClick={()=>props.alert(data)}>Click Me</button>
//     </div>
//   )
// }

// class User extends React.PureComponent{
//   render() {
//   console.log("rerendering");
//     return (
//        <div className="User">
//         <h1>User Component {this.props.count}</h1>
//        </div>
//     );
//   }
// }

function User(){
  return(
    <div className="User">
      <h1>User components</h1>
    </div>
  )
}

export default User