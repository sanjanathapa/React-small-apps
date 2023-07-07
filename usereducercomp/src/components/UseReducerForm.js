// import { useState  } from "react"
import { useReducer } from "react";


const INCREMENT_COUNT = 'increment-count';
const SET_VALUE_TO_ADD = 'change_value_to_add';
const ADD_VALUE_TO_COUNT = 'add_value_to_count';
const DECREMENT_COUNT = 'decrement_count';

const reducer = (state, action) => {
  switch(action.type) {
    case INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1
      }
      case DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1
      }
      case ADD_VALUE_TO_COUNT:
      return {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0
      }
      case SET_VALUE_TO_ADD: 
      return {
        ...state,
        valueToAdd: action.payload
      }
      default:
        return state

  }
// if(action.type === INCREMENT_COUNT){
//   return{
//     ...state,
//     count: state.count + 1
//   }
//  }

//  if(action.type === SET_VALUE_TO_ADD){
//   return{
//     ...state,
//     valueToAdd: action.payload
//   }
//  }
//  return state
}
const UseReducerForm = () => {
    // const [count, setCount] = useState(5);
    // const [valueToAdd, setValueToAdd] = useState(0)

    const [state, dispatch]= useReducer(reducer, {
      count: 10,
      valueToAdd:0
    })
console.log(state, "-this is the state-")
    const increment = () => {
      dispatch({
        type: INCREMENT_COUNT
      });
    }

    const decrement = () => {
      // return setCount(count - 1)
      dispatch({
        type: DECREMENT_COUNT
      })
  }

  const handleChange = (event) => {
    const value  = parseInt(event.target.value || 0)
    // setValueToAdd(value)
     dispatch({
      type: SET_VALUE_TO_ADD,
      payload: value
     })
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: ADD_VALUE_TO_COUNT
    })
  }
  return (
    <div>
      <div>Count is : {state.count}</div>
      <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      </div>
      <form onSubmit={handleFormSubmit}>
        <label>Add a lot</label>
        <input value={state.valueToAdd || ''} onChange={handleChange} type="number"></input>
        <div>
          <button>Add it</button>
        </div>
      </form>

    </div>
  )
}

export default UseReducerForm

//Rules of reducer functions
//anytime we need to update our state or our component to rerender when we are using useREducer, we are going to call dispatch.
//when we call dispatch, React is going to go and find that reducer function that we defined at the top of the file. and run it 
//when that func. is executed by react.

//in that reducer functon, first argument refered as state is going to be the whatever the current state of our component is, 
//that is being maintened by that reducer,
//the value of that second argu is going to be whatever we passed into the dispatch.

//NOTE:- if you ever want to pass something into dispatch, you are going to pass it in always as the first atgument.

//so that first argument is going to show up in the reducer function as that second argument that usually we call action.
//the reducer function is going to run and the key is whatever we return from that function is gonna be our brand new updated 
//state.
//will return an object{count:200, valueToAdd:300}. suppose this object we decide to return it form our reducer function. so after
// getting the new state. our component is going to re-render. we are going to call useREducer again, we get that state variable 
//in the [state var].
//and ths state var  is gonna be this new object that we had just returned from the reducer function.


//dispatch()
//when we call 'dispatch', we need to pass along some info to tell the reducer how the state should be updated.
//we have billion ways to do this.
//The React community has come up with a convention on how to tell the reducer what it needs to do.


//action objects would have type, and the sole purpose of that type was to communicate from calling dispatch inside the eventhandlers over to the reducers, why we are running teh reducer and what state we need to update. this was the only purpose of action types
//and the solution or pattern is :-

//IMMER -> is a library that lets you write code to directly mutate state