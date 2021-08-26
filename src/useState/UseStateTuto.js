import { useState } from "react"
const UseStateTuto = () => {

    const [inputValue, setInputValue] = useState("Hello World!")

    const onChange = (event) => {
        setInputValue(event.target.value)
    }
    return (
        <div>
            <input placeholder="Enter something..." onChange={onChange} />
            {inputValue}
        </div>
    )
}

export default UseStateTuto
