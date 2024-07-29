import React, {useState, useMemo, useCallback} from 'react'

// The useMemo and useCallback Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.

function UseMemoAndCallback() {
    const [count , setCount] = useState(0);
    const [countTwo , setCountTwo] = useState(2);
    
    // const expense = useCallback(() => {
    //     console.log("useEffect call !!");       
    //     setCalculation(count * 2);
    // }, [count]);

    const calculation = useMemo(() => {
        console.log("useMemo call")
        return count * 2;
    }, [count])

    
    
    const handler = useCallback(() => {
        console.log("handler call")
        setCount(count + 1);
    }, [count]);


    const handlerTwo = () => {
        setCountTwo(countTwo + 2);
    }
  return (
    <div>
        <h3>count: {count}</h3>
        <h3>countTwo: {countTwo}</h3>
        <h3>Calculation: {calculation}</h3>
        <button onClick={handler}>Increment</button>
        <button onClick={handlerTwo}>IncrementTwo</button>
    </div>
  )
}

export default UseMemoAndCallback