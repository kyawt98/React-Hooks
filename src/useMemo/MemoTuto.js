import { useState,useEffect,useMemo } from "react"
import axios from "axios"

const MemoTuto = () => {
    const [data, setData] = useState(null)
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
        .then((res) => {
            setData(res.data)
        })
    }, [])

    const findLongestName = (comments) => {
        if(!comments) return null

        let longestName = ''
        for(let i=0; i < comments.length; i++){
            let currentName = comments[i].name
            if(currentName.length > longestName.length){
                longestName = currentName
            }
        }
        console.log("This was computed");
        return longestName
    }

    const getLongestName = useMemo(() => findLongestName(data), [data])

    return (
        <div>
            <h3>{getLongestName} </h3>

            <button
                onClick={()=>{
                    setToggle(!toggle)
                }}
            >
                {" "}
                Toggle
            </button>
            {toggle && <h4>Toggle</h4>}
        </div>
    )
}

export default MemoTuto
