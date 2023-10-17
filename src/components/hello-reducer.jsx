import React, { useReducer } from 'react';

const initialState= {count: 0};

const reducer = (state, action) =>{
    switch(action.type){
        case "INCREMENT":
            return {count: state.count + 1};
        case "DECREMENT":
            return {count: state.count - 1};
        default:
            throw new Error("Action not available");
    }
};

export const HelloReducer = () => {

    const[state, dispatch] = useReducer(reducer, initialState);

    const onIncrement = () => dispatch({ type: "INCREMENT" });
    const onDecrement = () => dispatch({ type: "DECREMENT" });


  return (
    <>
        <div>Total count: {state.count}</div>
        <div>
            <button onClick={onIncrement}>Increment</button>
            <button onClick={onDecrement}>Decrement</button>
        </div>
    </>
  )
}
