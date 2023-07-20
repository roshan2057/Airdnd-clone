import React, { useState, useEffect } from 'react'
import './login.css'

const Login = () => {

    const [clickedEmail, setClickedEmail] = useState(false);
    const [clickedPass, setClickedPass] = useState(false);
    const [disabled, setDisabled] = useState(true);

    const [data, setData] = useState({
        email: '',
        password: ''
    });

    const handleEmailClicked = () => {
        setClickedEmail(true)
    }
    const handlePassClicked = () => {
        setClickedPass(true)
    }

    const handleData = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }
    useEffect(() => {
        // Email validation regex pattern
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Check if email is valid and password length is at least 8 characters
        const isEmailValid = emailPattern.test(data.email);
        const isPasswordValid = data.password.length >= 8;

        // Enable or disable the button based on the validation results
        setDisabled(!(isEmailValid && isPasswordValid));
    }, [data.email, data.password]);

    return (
        <section className='login'>
            <header className='login-header'>
                <p className='login-logo'>AIRDNA</p>
                <p className='login-sign'>Don't have an account? <a href="/signup">Sign Up</a></p>
            </header>
            <div className='login-box'>
                <form className='login-form' autoComplete="off">
                    <h2>Welcome to MarketMinder</h2>
                    <div className='login-form-top'>
                        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/753px-Google_%22G%22_Logo.svg.png' alt="Google Logo" width={23} height={23} />
                        <p>Continue with Google</p>
                    </div>
                    <div className="divider">
                        <hr />
                        OR
                        <hr />
                    </div>
                    <div className='login-form-box'>
                        <div className='input-div' onClick={handleEmailClicked} >
                            <input type="email" name="email" value={data.email} onChange={(e) => handleData(e)} />
                            <p className={`${clickedEmail ? 'clicked' : 'not-clicked'}`}>Email</p>
                        </div>
                        <div className='input-div' onClick={handlePassClicked} >
                            <input type="password" name="password" value={data.password} onChange={(e) => handleData(e)} />
                            <p className={`${clickedPass ? 'clicked' : 'not-clicked'}`}>Password</p>
                        </div>
                        <button style={disabled ? { cursor: 'not-allowed', backgroundColor: 'rgb(117, 117, 117)' } : { backgroundColor: '' }} disabled={disabled}>Sign In</button>
                        <p className='forgot'>Forgot your password?</p>
                    </div>

                </form>
            </div>
        </section>
    )
}

export default Login