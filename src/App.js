import { Provider } from 'react-redux';
import './App.css';
import TodoList from './components/ToDoList';
import { store } from './Store/reducer';
import {React, useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
          <Header></Header>
          <TodoList></TodoList>  
          <Footer></Footer>
      </Provider>
    </div>
  );
}

export default App;
