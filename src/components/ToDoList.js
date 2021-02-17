import { useState, React } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AddToList, DeleteFromList } from '../Store/reducer';
import './ToDoList.css';


export default function TodoList() {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const Todos = useSelector(state => state.Todos);
  // const Todos = [{
  //   title: "Title1"
  // },
  // {
  //   title: "Title2"
  // }];
  return (
    <section id='main-todo'>
    <div className='todo-area'>
      <div className='todo-heading'>
        <h1>My-List</h1>
      </div>
      <div className='input-div'>
        <input id="myInput" placeholder='Enter Todo here...' onChange={(e) =>{ setValue(e.target.value)}} />
        <button onClick={() => {
          dispatch(AddToList(value));
          document.getElementById('myInput').value = '';
          }}><p>+</p></button>
      </div>
      <div className='todo-listing'>
        <ul>
          {Todos.map((props) => {
            const id = props.id;
            return (
              <li>
                <h3>{props.title}</h3>
                <button onClick={ () => {
                  dispatch(DeleteFromList(Todos.indexOf(props.title)));                  
                  }}> DELETE</button>
              </li>
            );
          })}
        </ul>
      </div>
      </div>
      </section>
  )
}
