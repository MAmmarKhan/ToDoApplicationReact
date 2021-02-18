import { configureStore, createSlice } from "@reduxjs/toolkit";


//createSlice
const todoSlice = createSlice({
  name: 'ToDoList',
  initialState: {
    Todos: [{
      title: "Do the homework",//0
      completed: false
    },
    {
      title: "Create Portfolio site",//1
      completed: false
    },
    {
      title: "Add Node.js to the Project",
      completed: false
    },
    {
      title: "Pet the Fox",
      completed: false
    }]
  },
  
  reducers: {
    AddToList: (state,action) => {      
      state.Todos.unshift({title: action.payload});      
    },
    DeleteFromList: (state,action) => {
      state.Todos.splice(action.payload,1);
    },
    HandleCheckBox: (state,action) => {
      const todo = state.Todos.find(todo => todo.title === action.payload);
      if (todo) {
        todo.completed = !todo.completed
      }      
    }
  }
})

export const store = configureStore({
  reducer: todoSlice.reducer
})
export const { AddToList, DeleteFromList,HandleCheckBox} = todoSlice.actions;