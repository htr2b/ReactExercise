import React from 'react'

function Login() {

    return (
        <>
            <div>
                <p>username</p>
                <input type="text" placeholder="Enter your username" />
            </div>
            <div>
                <p>password</p>
                <input type='password' placeholder='Enter your password' />
            </div>
            <br></br>
            <button>Login</button>
        </>
    )
}

export default Login