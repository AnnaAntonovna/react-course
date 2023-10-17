import { useReducer, createContext } from 'react';

const initialState = {
    count: 0,
    isChecked: false,
    number: 1,
}

const reducer = (state, action) =>{
    switch(action.type){
        case "INCREMENT":
            return {...state, count: state.count + 1};
        case "DECREMENT":
            return {...state, count: state.count - 1};
        case "CHECK":
            return {...state, isChecked: true};
        case "UNCHECK":
            return {...state, isChecked: false};
        case "NUMBERCHANGED":
            return {...state, number: action.number};////???
        default:
            throw new Error("Action is not available!");
    }
};
export const ApplicationContext = createContext();

export const AppContext = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <ApplicationContext.Provider value={[state, dispatch]}>
            {children}
        </ApplicationContext.Provider>
    );
};