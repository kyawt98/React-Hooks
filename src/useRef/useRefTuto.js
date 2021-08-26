import React from 'react'
import { useRef } from 'react'

const UseRefTuto = () => {
    const textRef = useRef(null)

    const onClick = () => {
        textRef.current.value = ""
        console.log(textRef.current.value);
    }
    return (
        <div>
            <input type="text" placeholder="type something..." ref={textRef} />
            <button onClick={onClick}>
                Submit
            </button>
        </div>
    )
}

export default UseRefTuto
