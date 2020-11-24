import styles from '../styles/Welcome.module.css'

export default function Welcome() {
    return(
        <>
        <div className={styles.nexsHero}>
            <h1>bun venit <br /> pe nexs.</h1>
            <p>Suntem o comunitate bazată pe gaming-ul românesc. Încă de la început ne-am gândit numai la idei noi, crearea unui staff decent și un loc unde toate șansele sunt egale indiferent de grad.</p>
        <div className={styles.nexsRender}></div>
        </div>
        <div className={styles.nexsStats}>
            <h1>1</h1>
            <p>servere <br /> totale</p>
            <h1>999</h1>
            <p>playeri <br /> totali</p>
        </div>
        </>
    )
}