import axios from "axios"
import { useEffect, useState } from "react"
const UseEffectTuto = () => {

    const BASE_URL = "https://jsonplaceholder.typicode.com/comments"

    const [data, setData] = useState("")
    const [count, setCount] = useState(0)
    useEffect(() => {
        axios.get(BASE_URL)
        .then((res)=>{
            setData(res.data[0].email)
            // console.log(res.data);
            console.log("API was called");
        })
    },[])

    return (
        <div>
            <h2>Email</h2>
            <span>{data}</span> 
            <h3>{count}</h3>
            <button onClick={
                () => {
                    setCount(count + 1)
                }
            }>
                Click
            </button>
        </div>
    )
}

export default UseEffectTuto
