import { Outlet } from 'react-router-dom'
import Header from './Header'
import styles from './Layout.module.css'
import { useScrollToHash } from './useScrollToHash'

export default function Layout() {
  useScrollToHash()

  return (
    <div className={styles.container}>
      <a href="#contenu" className={styles.skipLink}>
        Aller au contenu
      </a>
      <Header />
      <main id="contenu" className={styles.main}>
        <Outlet />
      </main>
    </div>
  )
}
