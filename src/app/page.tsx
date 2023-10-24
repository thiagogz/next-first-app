import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Next</h1>
      <Link href="/pedido">Pedido</Link>
    </main>
  )
}
