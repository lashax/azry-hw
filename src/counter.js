import {useState} from "react";

const Counter = () => {
    const [count, increment, decrement] = useCounter();

    return (
        <div>
            <button onClick={() => increment()}>Minus</button>
            <br/>
            <button onClick={() => decrement()}>Plus</button>
            <br/>
            {count}
        </div>
    );
}

const useCounter = () => {
    const [count, setCount] = useState(0);
    const decrement = (val) => {
        if (val === undefined) val = 1;
        setCount(count - val);
    }
    const increment = (val) => {
        if (val === undefined) val = 1;
        setCount(count + val);
    }

    return [count, decrement, increment];
}

export default Counter;