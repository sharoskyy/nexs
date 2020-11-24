import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../styles/Footer.module.css'

export default function Footer() {
    return(
        <>
        <div class={styles.nexsFooter}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#091222" fill-opacity="1" d="M0,256L48,229.3C96,203,192,149,288,154.7C384,160,480,224,576,218.7C672,213,768,139,864,128C960,117,1056,171,1152,197.3C1248,224,1344,224,1392,224L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
        </div>
        <div class={styles.nexsSocial}>
        <a href="https://discord.gg/84bqtjugB7"><FontAwesomeIcon icon={['fab', 'discord']} /></a>
        <a href="https://steamcommunity.com/groups/nexsr0mania"><FontAwesomeIcon icon={['fab', 'steam']} /></a>
        <a href="https://www.youtube.com/user/gaNNicus96"><FontAwesomeIcon icon={['fab', 'youtube']} /></a>
        </div>
        </>
    )
}