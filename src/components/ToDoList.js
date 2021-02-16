import { useState, React } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AddToList, DeleteFromList } from '../Store/reducer';


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
    <div>
      <h1>Counter</h1>
      {Todos.map((props) => {
        const id = props.id;
        return (
          <div style={{ display:'flex'}}>
            <h1>{props.id}</h1>
            <h3>{props.title}</h3>
            <button onClick={() => dispatch(DeleteFromList(Todos.indexOf(props.title)))}> DELETE</button>
          </div>
        );
      })}
      
      <h3>{AddToList.type}</h3>
      <input placeholder="Add Todo.." type='text' onChange={(e) => setValue(e.target.value)} />
      <button onClick={() => dispatch(AddToList(value))}>Add Todo</button>
    </div>
  )
}
