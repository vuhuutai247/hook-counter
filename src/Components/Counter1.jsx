import { useState } from "react";

const Counter1 = () => {
    const [count, setCount] = useState(0);
    
    function handleAddCLick() {
        setCount(count + 1);
    }
    return (
        <>
            <label>
                Count: {count}
                <button onClick={handleAddCLick}>Add 1</button>
            </label>
        </>
    )
}

export default Counter1
