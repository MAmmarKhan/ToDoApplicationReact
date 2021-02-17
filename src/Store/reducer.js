import { configureStore, createSlice } from "@reduxjs/toolkit";


//createSlice
const todoSlice = createSlice({
  name: 'ToDoList',
  initialState: {
    Todos: [{
      title: "Do the homework"
    },
    {
      title: "Create Portfolio site"
    },
    {
      title: "Add Node.js to the Project"
    },
    {
      title: "Pet the Fox"
    }]
  },
  reducers: {
    AddToList: (state,action) => {      
      state.Todos.push({title: action.payload})
    },
    DeleteFromList: (state,action) => {
      state.Todos.splice(action.payload,1)
    }
  }
})

export const store = configureStore({
  reducer: todoSlice.reducer
})
export const { AddToList, DeleteFromList} = todoSlice.actions;