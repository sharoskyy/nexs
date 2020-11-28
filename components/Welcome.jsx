import styles from '../styles/Sections.module.css'
import { MdArrowForward } from "react-icons/md";

export default function Welcome() {
    return(
       <>
       <section>
        <div className={styles.nexsWelcome}>
            <h1>bun venit <br /> pe nexs.</h1>
            <p>Suntem o comunitate bazată pe gaming-ul românesc. Încă de la început ne-am gândit numai la idei noi, crearea unui staff decent și un loc unde toate șansele sunt egale indiferent de grad.</p>
            <img src="render.png"></img>
            <a href="/"> <span> <MdArrowForward /> </span></a>
        </div>
        </section>
        </>
    )
}