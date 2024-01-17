// function Student(props){
//     console.log(props)
//     return (
//         <div>
//             <h1>{props.name}</h1>
//             {/* <h1>{props.email}</h1>
//             <h1>{props.other.add}</h1>
//             <h1>{props.other.mobile}</h1> */}
//         </div>
//     )
// }

// export default Student;

import React from "react";

class Student extends React.Component{
    render(){
        return(
            <div>Student name: {this.props.name}</div>
        )
    }
}

export default Student