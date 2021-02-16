import { Provider } from 'react-redux';
import './App.css';
import TodoList from './components/ToDoList';
import { store } from './Store/reducer';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <TodoList></TodoList>
      </Provider>
    </div>
  );
}

export default App;
