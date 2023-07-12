import { useState } from "react";

const Counter2 = () => {
const [count, setCount] = useState(0);

function handleAddCLick() {
    setCount(count + 2);
}
return (
    <>
        <label>
            Count: {count}
            <button onClick={handleAddCLick}>Add 2</button>
        </label>
    </>
)
}

export default Counter2