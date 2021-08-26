import { useLayoutEffect, useEffect, useRef } from "react"

const UseLayoutEffectTuto = () => {
    const inputRef = useRef(null)

    useLayoutEffect(() =>{
        console.log(inputRef.current.value)
    },[])

    useEffect(() => {
        inputRef.current.value = "Hello"
        console.log("Hello");
    },[])
    
    return (
        <div className="App">
            <input ref={inputRef} value="PEDRO" style={{ width: 400, height:100, marginBottom:20}} />
        </div>
    )
}

export default UseLayoutEffectTuto
