import { useState } from "react";
import styles from '../../styles/Home.module.css'

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmailChange = e => {
        setEmail(e.target.value)
    }
    
    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const handleFormSubmit = e => {
        e.preventDefault()
    }

    return (
        <div className={styles.container}>
            <h1>Welcome to Login Page</h1>
            <form onSubmit={handleFormSubmit}>
                <label for="email-input">Email</label>
                <br />
                <input type="email" name="email-input" placeholder="Enter email" value={email} onChange={handleEmailChange} />
                <br />
                <br />
                <label for="password-input">Password</label>
                <br />
                <input type="password" name="password-input" placeholder="Enter password" value={password} onChange={handlePasswordChange} />
                <br />
                <br />
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginPage;
