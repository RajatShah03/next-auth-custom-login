import { useState } from "react";
import { signIn } from "next-auth/react"
import styles from '../../styles/Home.module.css'
import { useRouter } from "next/router";

const LoginPage = () => {
    const router = useRouter()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginError, setLoginError] = useState('')

    const handleEmailChange = e => {
        setEmail(e.target.value)
    }
    
    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const handleFormSubmit = async e => {
        e.preventDefault()

        setLoginError('')
        
        const res = await signIn('credentials', { email, password, redirect: false, callbackUrl: 'http://localhost:3000/' })
        console.log(res)
        if(res.error) {
            setLoginError(res.error)
        }

        if(res.ok && res.url) {
            router.replace(res.url)
        }
    }

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1>Welcome to Login Page</h1>
                <form onSubmit={handleFormSubmit}>
                    <label htmlFor="email-input">Email</label>
                    <br />
                    <input type="email" name="email-input" placeholder="Enter email" value={email} onChange={handleEmailChange} />
                    <br />
                    <br />
                    <label htmlFor="password-input">Password</label>
                    <br />
                    <input type="password" name="password-input" placeholder="Enter password" value={password} onChange={handlePasswordChange} />
                    <br />
                    <br />
                    <button type="submit">Login</button>
                </form>
                <h5 className={styles.error}>{loginError}</h5>
            </main>
        </div>
    );
};

export default LoginPage;
