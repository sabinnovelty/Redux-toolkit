import logo from './logo.svg';
import './App.css';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './store/store';
import { useState } from 'react';
// import { addCount } from './store/counterSlice';
// JSX
function App() {
  // const dispatch = useDispatch();
  // const state = useSelector((state) => state);
  // console.log(state);
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState('');
  return (
    <div className='App'>
      <h1>Todo Application</h1>
      // onChange
      <input
        type='text'
        value={todo}
        onChange={(event) => {
          setTodo(event.target.value);
        }}
      />
      <button
        onClick={() => {
          console.log('todo clicked', todo);
          setTodoList(() => [todo, ...todoList]);
          setTodo('');
        }}
      >
        Add Todo
      </button>
      <ul>
        {todoList.map((todo) => {
          return (
            <div style={{ display: 'flex' }}>
              <li>{todo}</li>
              <button
                onClick={() => {
                  console.log('todo clicked', todo);
                  setTodoList(() => [todo, ...todoList]);
                  setTodo('');
                }}
              >
                Remove Todo
              </button>
            </div>
          );
        })}
      </ul>
      {/* <ul>
        <li>todo 1 </li>
        <li>todo 2 </li>
      </ul> */}
    </div>
  );
}

export default App;

// // Context API , Redux, Redux Toolkit

// // const user = {
// //   name:"sfds"
// // }
// // // mutate
// // user.name='sfds'

// // const newUser = {
// //   ...user
// // }

// // Redux
// const ProductInitialState = {
// product:[]
// }
// function reducer(state,action){
//   switch(action.type){
//     case 'add/product':{
//       return {
//         ...state,
//         product:[action.payload]
//       }
//     }
//   }
// }

// // Redux
// // Store, Dispatch, Action Creator , reducer
// // Action creator

// function addProduct(){
//   dispatch({type:'add/prouect',payload:""})
// }

// // Redux toolKit
// const ProductInitialState = {
//    product:[],
//    count:0
//   }
// const prductSlice = createSlice({
//   name:'product',
//   reducers:{
//     addCount:(state)=>{
//       // immerjs
//       state.count = 9
//     },
//     removeCount:()=>{

//     }
//   }
// })

// const {addCount, removeCount} = prductSlice.actions
