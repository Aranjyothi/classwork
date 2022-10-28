import { useState } from "react";

function Counter(props) {
    // console.log('useState:',useState)
    // ƒ useState(initialState) {
    //     var dispatcher = resolveDispatcher();
    //     return dispatcher.useState(initialState);
    //   }
    //     const countState = useState(0)//bracket had initial value=0
    //     //countState will be having array of 2 value 1.initial value(0), 2. a function to update state
    //    //1.set initialvalue to count
    //     let count = countState[0]
    //     //2.function- to change the state
    //     let setCount = countState[1]
    //Destructuring the array
    let [count, setCount] = useState(0)
    let [number,setNumber] =useState('')
    const handleIncreament = () => {
        // setCount(count + parseInt(number))
        setCount(prevState => prevState = parseInt(number))
   
    }
   
    const handleDecreament = () => {
        setCount(count - parseInt(number))
    }
    
    const handleDivideBy = () => {
        setCount(count / parseInt(number))
    }
    const haldleMultiplyBy = () => {
        setCount(count * parseInt(number))
    }
    const handleChange = (e) => {
        setNumber(Number(e.target.value))
    }
    return (
        <>
            <span>Counter Count:{count}</span>
            <section>
                <input type="number"
                    value={number}
                    onChange={handleChange} 
                    /><br></br>
                <button onClick={handleIncreament}>+</button>
                <button onClick={handleDecreament}>-</button>
                <button onClick={handleDivideBy}>/</button>
                <button onClick={haldleMultiplyBy}>*</button>
            </section>
        </>
    )
}
export default Counter;