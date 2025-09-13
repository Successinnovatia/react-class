import React,{useState} from 'react'

function Login() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // const handleLogin = () => {
    //     setIsLoggedIn(true);
    // }

    // const handleLogout = () => {
    //     setIsLoggedIn(false);
    // }

    const handleAuth = () => {
        setIsLoggedIn(!isLoggedIn);
    }

    // if (isLoggedIn === false) {
    //     return <div>
    //         <h1>Please log in to continue.</h1>
    //         <button onClick={handleLogin}>Log In</button>
    //     </div>;
    // }
  return (
    <div>

        {isLoggedIn && <h1>Welcome back, User!</h1>}

        <button onClick={handleAuth}>{isLoggedIn ? 'logout' : 'login'}</button>

    </div>
  )
}

export default Login