import { useReducer } from "react"

const UseReducerTuto = () => {
    const reducer = (state, action) =>{
        switch (action.type){
            case "INCREMENT" :
                return { count: state.count + 1, showText: state.showText}
            
            case "SHOWTEXT" :
                return { count: state.count, showText: !state.showText }

            default :
                return state
        }
    }
    
    const [state, dispatch] = useReducer(reducer, {
        count: 0, showText: false
    } )

    return (
        <div>
            <h1>{ state.count }</h1>
            <button onClick={()=>{
                dispatch({ type: "INCREMENT"})
                dispatch({ type: "SHOWTEXT"})
            }}>
                Click Here
            </button>
            { state.showText && <p>This is a text</p>}
        </div>
    )
}

export default UseReducerTuto
