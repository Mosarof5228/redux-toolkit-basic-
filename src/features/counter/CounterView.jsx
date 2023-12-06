// import { useDispatch, useSelector } from "react-redux";
// import { decrement, increment, reset } from "./counterSlice";

import { useDispatch, useSelector } from "react-redux";
import { increment, incrementByValue } from "./counterSlice";



const CounterView = () => {
    // const count = useSelector((state) => state.counter.count);
    // console.log(count)
    // const dispatch = useDispatch()

    const count = useSelector(state => state.counter.count)
    console.log(count)
    const dispatch = useDispatch()

    return (
        <div>
            <h2>Count:{count}</h2>
            {/* <button onClick={() => { dispatch(increment()) }}>Increment</button>
            <button onClick={() => { dispatch(decrement()) }}>Decrement</button>
            <button onClick={() => { dispatch(reset()) }}>Reset</button>
            <button onClick={() => { dispatch(reset()) }}>Reset</button>
            <button onClick={() => { dispatch(reset()) }}>Reset</button> */}
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(incrementByValue(5))}>Increment by value</button>
            <button>Decrement</button>
            <button>Reset</button>
        </div>
    );
};

export default CounterView;