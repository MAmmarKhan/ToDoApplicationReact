import { useState, React } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AddToList, DeleteFromList,HandleCheckBox } from '../Store/reducer';
import Checkbox from '@material-ui/core/Checkbox';
import './ToDoList.css';


export default function TodoList() {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');
  const Todos = useSelector(state => state.Todos);

  const [checked, setChecked] = useState(false);
  const [checked0, setChecked0] = useState(false);
  
  function handleChange(event){

    setChecked(event.target.checked);
  };
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
          {Todos.map((props,index) => {
            const id = Todos.indexOf(props.title);
            return (
              <li key={index}>
                {/* //Todos[index].completed? */}
                <Checkbox color="primary" checked={props.completed}  onChange={ () => {dispatch(HandleCheckBox(Todos[index].title)); }} inputProps={{ 'aria-label': 'secondary checkbox' }}/>
                <h3 style={props.completed? {textDecorationLine: 'line-through'}: {textDecorationLine: 'none'}}>{props.title}</h3>                 
                <button onClick={ () => {
                  dispatch(DeleteFromList(index));                  
                  }}>DELETE</button>
              </li>
            );
          })}
        </ul>
      </div>
      </div>
      </section>
  )
}
