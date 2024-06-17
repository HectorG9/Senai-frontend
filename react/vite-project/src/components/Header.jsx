import styles from './Header.module.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className={styles.header}>
      
      <ul className={styles.menu}>
        
        <li><Link className={styles.linkmenu} to ="./">Home</Link></li>
        <li><Link className={styles.linkmenu} to="./Mission">Missão</Link></li>
        <li><Link className={styles.linkmenu} to="./Product">Produto</Link></li>
        <li><Link className={styles.linkmenu} to="./History">Historia</Link></li>
        <li><Link className={styles.linkmenu} to="./Contact">Contato</Link></li>
          

      </ul>
    </header>
  )
}

export default Header