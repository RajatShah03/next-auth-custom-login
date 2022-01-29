import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Header = () => {
    const { status } = useSession({ required: false })

    return (
        <div className={styles.headerContainer}>
            <header className={styles.header}>
                <h2>{'<App />'}</h2>
                <div className={styles.navContainer}>
                    <nav className={styles.nav}>
                        <Link href='/'>Home</Link>
                        <Link href='/posts'>Posts</Link>
                    </nav>
                    <div className={styles.headerAuth}>
                        <h4><i>{status}</i></h4>
                        {status !== 'unauthenticated' && <button onClick={() => signOut({ redirect: false })}>Logout</button>}
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header
