import React from 'react'
import './login.css'

const Login = () => {
    return (
        <section className='login'>
            <header className='login-header'>
                <p className='login-logo'>AIRDNA</p>
                <p className='login-sign'>Don't have an account? <a href="/signup">Sign Up</a></p>
            </header>
            <div className='login-box'>
                <form className='login-form'>
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
                        <input type="text" />
                        <input type="text" />
                        <button>Sign In</button>
                        <p>Forgot your password?</p>
                    </div>

                </form>
            </div>
        </section>
    )
}

export default Login