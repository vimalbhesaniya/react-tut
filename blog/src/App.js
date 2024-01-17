import React, { useState, useEffect, useMemo } from 'react';
import Student from './Student';
import './App.css';
import Profile from './profile';
import Login from './login';
import User from './user';
import { Table } from 'react-bootstrap';

// function App() {
//   const [data,setData]=useState('vishala');
//   function updateData(){
//     setData('vishu');
//   }
//   return (
//     <div className="App">
//       <h1>{data}</h1>
//       <button onClick={updateData}>Click Me</button>
//     </div>
//   );
// }

// class App extends React.Component {
// constructor(){
//   super();
//   this.state={
//     data:'vishala'
//   }
// }
// apple(){
//   this.setState({data:'vishu'});
// }
// render(){
//   return (
//     <div className="App">
//     <h1>{this.state.data}</h1>
//     <button onClick={()=>this.apple()}>Click me</button>
//     </div>
//     );
//   }
// }

// class App extends React.Component{  
//     constructor(){
//       super();
//       this.state={name:"Vishala"}
//     }
//     render(){

// const [name,setName]=useState('Vishu');
//       return (
//         <div className="App">
//       <h1>props in react :)</h1>
//       {/* <Student name={'vishu'} email='vishu@gmail.com' other={{add:'102,madhuvan app',mobile:"1234566754"}}/>
//       <Student name={'ritu'} email='ritu@gmail.com' other={{add:'103,madhv app',mobile:"23456789"}}/>
//       <Student name={'pooju'} email='pooju@gmail.com' other={{add:'104,riddhi app',mobile:"098765432"}}/> */}
//       {/* <Student name={name}/>
//       <button onClick={()=>setName("Vishala")}>Update name</button> */}
//       <Student name={this.state.name}/>
//       <button onClick={()=>this.setState({name:"Vishu"})}>Update name</button> 
//       </div>
//       );
//     }
//     }

// function App(){
//   const [data,setData]=useState(null) 
//   const [print,setPrint]=useState(false) 
//   function getData(val){
//     console.log(val.target.value);
//     setData(val.target.value)
//   }
//   return(
//     <div className='App'>
//     {
//       print?
//       <h1>{data}</h1>
//       :null
//     }
//       <input type='text' onChange={getData}/>
//       <button onClick={()=>setPrint(true)}>Print Data</button>
//     </div>
//   )
// }

// function App(){
//   const [status,setStatus]=useState(true)
//   return(
//     <div className='App'> 
//     {
//       status?<h1>Hello World!</h1>:null
//     }
//         <button onClick={()=>setStatus(false)}>Hide</button>
//         <button onClick={()=>setStatus(true)}>Show</button>
//       <button onClick={()=>setStatus(!status)}>Toggle</button>
//     </div>
//   )
// }

// function App(){
//   const [name,setName]=useState("")
//   const [tnc,setTnc]=useState(false)
//   const [color,setColor]=useState("")
//   function getFormData(e){
//   console.log(name,color,tnc)
//     e.preventDefault()
//   }
//   return(
//     <div className='App'> 
//     <form onSubmit={getFormData}>
//     <br/><br/>
//       <input type='text' placeholder='ENter Name' onChange={(e)=>setName(e.target.value)}/><br/><br/>
//       <select onChange={(e)=>setColor(e.target.value)}>
//         <option>Select Option</option>
//         <option>Black</option>
//         <option>Red</option>
//         <option>Pink</option>
//         <option>Blue</option>
//         <option>Green</option>
//       </select><br/><br/>
//       <input type='checkbox' onChange={(e)=>setTnc(e.target.checked)}/><span>Accept tems & condition</span><br/><br/>
//       <button type='submit'>Submit</button>
//     </form>
//     </div>
//   )
// }

// function App(){
//   return(
//     <div className='App'> 
//     <Profile />
//     </div>
//   )
// }

// function App(){
//   return(
//     <div className='App'> 
//     <Login />
//     </div>
//   )
// }

// function App(){
//   function getData(){
//     alert("Hello from app")
// }
//   return(
//     <div className='App'> 
//     <User data={getData}/>
//     </div>
//   )
// }

// class App extends React.Component{
//   constructor(){
//     super();
//     this.state={
//       name:"vishala"
//     }
//   }
//   render() {
//     return (
//        <div className="App">
//         <h1>Name : {this.state.name}</h1>
//        </div>
//     );
//   }
// }

// function App() {
//   const [name,setName]=useState("Vishala");
//   return (
//     <div className='App'>
//       <User name={name}/>
//       <button onClick={()=>{setName("Vishu")}}>Update Name</button>
//     </div>
//   )
// }

// class App extends React.Component{
//   constructor(){
//     super();
//     console.log("constructor")
//   }
//   componentDidMount(){
//     console.log("ComponentDidMount");
//   }
//   render() {
//     console.log("render");
//     return (
//        <div className="App">
//         <h1>Class component</h1>
//        </div>
//     );
//   }
// }

// function App (){
//   const [count,setCount]=useState(0)
//   useEffect(()=>{
//     console.log("useEffect");
//   })
//   return(
//     <div className='App'>
//       <h1>useEffect Example {count}</h1>
//       <button onClick={()=>setCount(count+1)}>Count</button>
//     </div>
//   )
// }

// function App (){
//   const [count,setCount]=useState(100);
//   const [data,setData]=useState(10)
//   useEffect(()=>{
//     console.log("useEffect");
//   },[data])
//   useEffect(()=>{
//     alert("count")
//   },[count])
//   return(
//     <div className='App'>
//       <h1>Count : {count}</h1>
//       <h1>Data : {data}</h1>
//       <button onClick={()=>setCount(count+1)}>Update count</button>
//       <button onClick={()=>setData(data+1)}>Update data</button>
//     </div>
//   )
// }

// function App (){
//   const [count,setCount]=useState(100);
//   const [data,setData]=useState(10)
//   return(
//     <div className='App'>
//       <User count={count} data={data}/>
//       <button onClick={()=>setCount(count+1)}>Update count</button>
//       <button onClick={()=>setData(data+1)}>Update data</button>
//     </div>
//   )
// }

// function App(){
//   const student=["Vishala","Ritali","Pooja","Khushi"];
//   student.map((item)=>{
//     console.log("My Name is : ", item)
//   });
//   for(let i=0;i<student.length;i++){
//     console.log("in for loop my name is : " , student[i]);
//   }
//   return(
//     <div className='App'>
//       <h1>My Name is Vishala</h1>
//     </div>
//   )
// }

// function App(){
//   const student=[
//   {name:"Vishala",email:"vishu@gmail.com",contact:1234567890},
//   {name:"Ritali",email:"ritali@gmail.com",contact:2345678901},
//   {name:"Khushi",email:"khushi@gmail.com",contact:5678901234},
//   {name:"Pooja",email:"pooja@gmail.com",contact:9012837465}
//   ];
//   return(
//     <div className='App'>
//       <h1>My Name is Vishala</h1>
//       {
//         student.map((item)=>
//           <h1> name is : {item}</h1>
//       )
//       }
//     </div>
//   )
// }

// function App() {
//   const student = [
//     { id: 1, name: "Vishu", address: [{ no: 101, flat: "Madhuvan", floor: 1 }, { no: 102, flat: "Madhv", floor: 2 }, { no: 103, flat: "ManMandire", floor: 3 }] },
//     { id: 2, name: "Khushi", address: [{ no: 104, flat: "Bansi", floor: 4 }, { no: 105, flat: "Varniraj", floor: 5 }, { no: 106, flat: "Hiramandire", floor: 6 }] },
//     { id: 3, name: "Pooja", address: [{ no: 107, flat: "sivalik", floor: 7 }, { no: 108, flat: "murlidhar", floor: 8 }, { no: 109, flat: "Riddhi", floor: 9 }] },
//     { id: 4, name: "Ritali", address: [{ no: 110, flat: "swastik", floor: 10 }, { no: 111, flat: "Madhv", floor: 11 }, { no: 112, flat: "ManMandire", floor: 12 }] }
//   ]
//   return (
//     <div className='App'>
//       <Table variant='light' striped>
//         <tbody>
//           <tr>
//             <td>Id</td>
//             <td>Name</td>
//             <td>Address</td>
//           </tr>

//             {student.map((item) =>
//             <tr>
//               <td>{item.id}</td>
//               <td>{item.name}</td>
//               <td>
//                 <Table variant='light' striped>
//                   <tbody>
//                   {
//                     item.address.map((data)=>
//                       <tr>
//                         <td>{data.no}</td>
//                         <td>{data.flat}</td>
//                         <td>{data.floor}</td>
//                       </tr>
//                     )
//                   }
//                   </tbody>
//                 </Table>
//               </td>
//             </tr>
//             )}

//         </tbody>
//       </Table>
//     </div>
//   )
// }

// function App() {
//   function parentAlert(data){
//     alert(data);
//   }
//   return (
//     <div className='App'>
//       <User alert={parentAlert}/>
//     </div>
//   )
// }

// class App extends React.PureComponent {
// constructor(){
//   super();
//   this.state={
//     count:1
//   }
// }
//   render() {
//   console.log("rerendering");
//     return (
//       <div className='App'>
//         <h1>Pure component {this.state.count}</h1>
//         <button onClick={()=>this.setState({count:this.state.count})}>Update Count</button>
//       </div>
//     )
//   }
// }

// class App extends React.Component {
//   constructor(){
//     super();
//     this.state={
//       count:1
//     }
//   }
//     render() {
//     console.log("rerendering");
//       return (
//         <div className='App'>
//           <User count={this.state.count}/>
//           <button onClick={()=>this.setState({count:this.state.count})}>Update Count</button>
//         </div>
//       )
//     }
//   }

// function App(){
// const [item,setItem]=useState(11);
// const [count,setCount]=useState(1);
// const  updateCount=useMemo(function upcount(){
//   console.log("hello");
//   return count*10;
// },[item])
//   return(
//     <div className='App'>
//       <h1>Count : {count}</h1>
//       <h1>{updateCount}</h1>
//       <button onClick={()=>setItem(item+1)}>Update Item</button>
//       <button onClick={()=>setCount(count*10)}>Update Count</button>
//     </div>
//   )
// }

const App = () => {
  return (
    <div>App</div>
  )
}

export default App;
