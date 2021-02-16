import { configureStore, createAction, createSlice } from "@reduxjs/toolkit";

//Initials
// const initialState = {
//   counter: 1
// }
// //Actions
// export const INCREMENT = createAction("INCREMENT");
// export const DECREMENT = createAction("DECREMENT");

// //Reducer
// export const Reducer = (state=initialState,action) => {
//   switch (action.type) {
//     case INCREMENT.type:
//       return { ...state, counter: state.counter+1}; 
//     case DECREMENT.type:
//       return { ...state, counter: state.counter-1}; 
//     default:
//       return {...state};
//   }
// }

//createSlice
const todoSlice = createSlice({
  name: 'ToDoList',
  initialState: {
    Todos: [{
      title: "Title1"
    },
    {
      title: "Title2"
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