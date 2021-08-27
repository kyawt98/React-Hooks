import { useContext } from 'react'
import { AppContext } from './ContextTuto'

const Login = () => {
    const { setUsername } = useContext(AppContext)

    return (
        <input placeholder="Username" 
            onChange={(event) => {
                setUsername(event.target.value)
            }}
        />
    )
}

export default Login
