import { useReducer, useState } from "react";

const ACTIONS = {
    INCREMENT: "increment",
    DECREMENT: "decrement"
};

const reducer = (state, action = {value: 1}) => {
    switch (action.type) {
        case ACTIONS.INCREMENT:
            return state + action.value;
        case ACTIONS.DECREMENT:
            return state - action.value;
        default: return state;
    }
}

const Counter = () => {
    const [count, dispatch] = useReducer(reducer, 0);

    const increment = (val) => { dispatch({
        type: ACTIONS.INCREMENT, value: val })
    };

    const decrement = (val) => { dispatch({
        type: ACTIONS.DECREMENT,
        value: val })
    };

    return (
        <div>
            <button onClick={() => decrement(5)} style={{"margin-right": "7px"}}>Minus</button>
            <b>{ count }</b>
            <button onClick={() => increment(5)} style={{"margin-left": "7px"}}>Plus</button>
            <br/>
        </div>
    );
}

// const useCounter = () => {
//     const [count, setCount] = useState(0);
//     const decrement = (val) => {
//         if (val === undefined) val = 1;
//         setCount(count - val);
//     }
//     const increment = (val) => {
//         if (val === undefined) val = 1;
//         setCount(count + val);
//     }
//
//     return [count, decrement, increment];
// }

export default Counter;