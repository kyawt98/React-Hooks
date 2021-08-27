import { useEffect } from 'react'

const Child = ({ returnComment }) => {
    useEffect(() => {
        console.log("Function was called");
    }, [returnComment])
    return (
        <div>
            <h4>{returnComment("Padro")}</h4>
        </div>
    )
}

export default Child
