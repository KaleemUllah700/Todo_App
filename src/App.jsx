//useState
// import "./App.css";
// import { useState } from "react";

// const App = () => {
//   return (
//     <div>
//       {/* <Form /> */}
//     </div>
//   );
// }

// const Form = () => {
//   const [form, setForm] = useState({
//     fname: "kaleem",
//     lname: "ullah",
//     email: "kaleem@gmail.com",
//     mobile: "3423423423"
//   });


//   const onChange = (e) => {
//     const input = e.target.name;
//     const value = e.target.value;
//     setForm({
//       ...form,
//       [input]: value 
//     });
//   }

//   const onSubmit = (e) => {
//     e.preventDefault(); 
//     console.log(form); 
//     setForm({
//       fname:"",
//       lname:"",
//       email:"",
//       mobile:""
//     })
//   }

//   return (
//     <div>
//       <form onSubmit={onSubmit}>
//         <label htmlFor="fname">First Name:</label>
//         <input
//           type="text"
//           name="fname"
//           id="fname"
//           value={form.fname}
//           onChange={onChange}
//         /><br />

//         <label htmlFor="lname">Last Name:</label>
//         <input
//           type="text"
//           name="lname"
//           id="lname"
//           value={form.lname}
//           onChange={onChange}
//         /><br />

//         <label htmlFor="email">Email:</label>
//         <input
//           type="email"
//           name="email"
//           id="email"
//           value={form.email}
//           onChange={onChange}
//         /><br />

//         <label htmlFor="mobile">Mobile Number:</label>
//         <input
//           type="number"
//           name="mobile"
//           id="mobile"
//           value={form.mobile}
//           onChange={onChange}
//         /><br />

//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default App;


//Todo app without props
// import {useState} from "react"
// import "font-awesome/css/font-awesome.min.css"
// const Test = ()=>{
// const [list, setList] = useState([])
// const [form, setForm] = useState({
//     content: ''
// })
// const onChange = (e)=>{
//     const key = e.target.name
//     const value = e.target.value
//     setForm({
//         ...form,
//         [key] : value
//     });
// }
// const onAddList = (e)=>{
//     e.preventDefault();
//     setList([
//         ...list,
//         form.content
//     ]);
//     setForm({
//         ...form,
//         content: ''
//     })
// }
// const onDeleteList = (index)=>{
//     const temp = [...list];
//     temp.splice(index,1);
//     setList(temp)
// }


//     return(
//         <div className="bg-[green] min-h-screen p-16">
//             <div className="flex flex-col items-center">
//                 <h1 className="text-lg font-semibold">ToDo App</h1>
//                 <form className="flex"  onSubmit={onAddList}>
//                     <input
//                         type="content" 
//                         value={form.content}
//                         name="content" 
//                         className="w-[380px] px-4" 
//                         placeholder="enter content here"
//                         required
//                         onChange={onChange} 
//                     />
//                     <button className="bg-blue-600 px-4 py-4">Add</button>
//                 </form>
//                 {
//                 list.map((item, index)=>(
//                     <ul className="bg-[white] border w-[440px] px-4 px-4 flex justify-between items-center py-4" key={index}>
//                         <span>{item}</span>
//                         <div className="flex gap-4">
//                             {/* <button className="text-[20px] bg-[lightgrey] w-[30px] rounded-full">
//                                 <i className="fa fa-edit text-[blue]"></i>
//                             </button> */}
//                             <button className="text-[20px] bg-[lightgrey] w-[30px] rounded-full" onClick={()=>onDeleteList(index)}>
//                                 <i className="fa fa-trash text-[red]"></i>
//                             </button>
//                         </div>
//                     </ul>
//                 ))
//                 }
//             </div>
                
//         </div>
//     )
// }

// export default Test
 





// App.jsx
import React, { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import "font-awesome/css/font-awesome.min.css";

const App = () => {
  const [list, setList] = useState(()=> {
    const storageList = localStorage.getItem('Tasks');
    return storageList ? JSON.parse(storageList) : []
  });
  const [form, setForm] = useState({ content: '' });

  useEffect(() => {
    localStorage.setItem('Tasks', JSON.stringify(list))
  }, [list])

  const onChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setForm({
      ...form,
      [key]: value,
    });
  };

  const onAddList = (e) => {
    e.preventDefault();
    setList([
      ...list,
       form.content
      ]);
    setForm({
       ...form,
        content: '' 
      });
  };

  const onDeleteList = (index) => {
    const temp = [...list];
    temp.splice(index, 1);
    setList(temp);
  };

  return (
    <div className="bg-[green] min-h-screen p-16">
      <div className="flex flex-col items-center">
        <h1 className="text-lg font-semibold">ToDo App</h1>
        <TodoForm
          content={form.content}
          onChange={onChange}
          onAddList={onAddList}
        />
        <TodoList list={list} onDeleteList={onDeleteList} />
      </div>
    </div>
  );
};

export default App;
