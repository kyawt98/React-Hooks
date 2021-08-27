import axios from "axios"
import { useState, useCallback } from "react"
import Child from "./Child"

const CallbackTuto = () => {
    const [toggle, setToggle] = useState(false)
    const [data, setData] = useState("hello world! I'm React Js")

    const returnComment = useCallback(
        (name) => {
        return data + name
        },
        [data]
        )

    return (
        <div>
            <Child returnComment={returnComment} />

            <button
                onClick={() => {
                    setToggle(toggle)
                }}
            >
                {" "}
                Toggle
            </button>
            {toggle && <h3>toggle</h3>}
        </div>
    )
}

export default CallbackTuto
