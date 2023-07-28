import React from 'react';
import {useAppDispatch} from "./hooks/redux";
import {counterSlice} from "./store/reducers/counterSlice";
import Header from "./components/Header/Header";
// @ts-ignore
const ButtonIncrement = React.lazy(() => import('increment/Button'))
// @ts-ignore
const ButtonDecrement = React.lazy(() => import('decrement/Button'))

function App() {

    const {increment, decrement} = counterSlice.actions
    const dispatch = useAppDispatch()

    return (
        <div>
            <Header/>
            <div className='buttons'>
                <ButtonIncrement children={"+1"} onClick={() => dispatch(increment(1))}/>
                <ButtonDecrement children={"-1"} onClick={() => dispatch(decrement(1))}/>
            </div>
        </div>
    );
}

export default App;