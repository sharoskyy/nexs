import styles from '../styles/Sections.module.css'
import { MdArrowForward } from "react-icons/md";

export default function Welcome() {
    return(
       <>
       <section>
        <div className={styles.nexsShop}>
            <h1>magazin <br /> nexs.</h1>
            <p>Ca orice comunitate acesta deține un magazin cu niște perk-uri în schimbul a unei sumei de bani reale. Nu sunt obligatori dar dacă dorești să susții comunitatea acesta este locul perfect.</p>
            <img src="render2.png"></img>
            <a href="/"> <span> <MdArrowForward /> </span></a>
        </div>
        </section>
        </>
    )
}