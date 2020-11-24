import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
    return(
        <>
        <div className={styles.navMain}>
            <img src="logo.png"></img>
            <a className={styles.navLink} href="/">ACASĂ</a>
            <a className={styles.navLink} href="https://nexs.ro/forum">FORUMURI</a>
        </div>
        </>
    )
}