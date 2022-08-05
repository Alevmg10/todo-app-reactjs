import React, {useState} from 'react';
import {AiOutlinePlus} from 'react-icons/ai';
import Todo from './Todo';

const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]`,
  container: `bg-slate-100 max-w-[500px] w-full m-auto rounded-md shadow-xl p-4`,
  heading: `text-3xl font-bold text-center text-gray-800 p-2`,
  form: `flex justify-between`,
  input: `border p-2 w-full text-xl`,
  button: `border p-4 ml-2 bg-purple-500 text-slate-100`,
  count: `text-center p-2`
}

function App() {

  const [tasks, setTasks] = useState(['Learn React', 'Grind Leetcode']);

  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>ToDo App</h3>
        <form className={style.form}>
          <input className={style.input} placeholder='Add Task' />
          <button className={style.button}><AiOutlinePlus size={30} /></button>
        </form>
        <ul>
          {tasks.map((task, index) => (
            <Todo key={index} task={task}/>
          ))}
        </ul>
        <p className={style.count}>You have 2 pending task</p>
      </div>
    </div>
  );
}

export default App;
