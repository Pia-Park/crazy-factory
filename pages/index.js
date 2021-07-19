import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.bodyall}>
      <Head>
        <title>CRAZY FACTORY</title>
        <meta name="description" content="CRAZY FACTORY - CRAZY RECIPE for People" />
        <link rel="icon" href="/icon.png" />
      </Head>
      <main className={styles.hero}>
        <div className={styles.main}>
          <div className={styles.nav}>
            <Link href="/">
              <img src="/logo-black.png"></img>
            </Link>
            <div className={styles.menu}>
              <Link href="/">ABOUT</Link>
              <Link href="/">RECIPE</Link>
              <Link href="/">CONTACT</Link>
            </div>
          </div>
          <div className={styles.bgimg}>
            <div className={styles.bgtext}><b>MAKE YOU HAPPY CRAZY</b></div>
            <img src="/bg.jpg"></img>
          </div>
        </div>
      </main>

    </div>
  )
}
