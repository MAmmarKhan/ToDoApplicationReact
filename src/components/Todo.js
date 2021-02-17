import React from 'react';
import { useState, React } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AddToList, DeleteFromList } from '../Store/reducer';

export default function Todo() {
  const [todo, setTodo] = useState([
    'todo 0',
    'todo 1',
    'todo 2',
    'todo 3',
    'todo 4',
    'todo 5',
    'todo 6',
  ]);

  const [val, setVal] = useState('');

  return (
      <section id='main-todo'>
        <div className='todo-area'>
          <div className='todo-heading'>
            <p>My-List</p>
          </div> 
          <div className='input-div'>
            <input placeholder='Enter Todo here...' onChange={(e)=>setVal(e.target.value)} />
            <button onClick={()=>addTodo()}>+</button>
          </div>
          <div className='todo-listing'>
            <ul>
            {
              todo.map((v,i)=>{
                return(
                  <li key={i}>
                    <p>{v}</p>
                    <button key={i} onClick={()=>deleteTodo(i)}>Delete</button>
                  </li>
                )
              })
            // font awesome delete icon tag ==> <i class="fa fa-trash-alt"></i>
            }
            </ul>
          </div>
        </div>
      </section>
  )
}
