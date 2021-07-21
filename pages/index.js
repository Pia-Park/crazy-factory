import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import About from './about'
import Slide from './component/slider'

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
              <img src="/logo-white.png"></img>
            </Link>
            <div className={styles.menu}>
              <Link href="/about"><div>ABOUT</div></Link>
              <Link href="/"><div>RECIPE</div></Link>
              <Link href="/"><div>CONTACT</div></Link>
            </div>
          </div>
          <div className={styles.bgimg}>
            {/* <Slide></Slide> */}
            <div className={styles.bgtext}>MAKE YOU HAPPY CRAZY</div>
            <div className={styles.search}>
              <input type="search" placeholder="Search Recipe" />
              <button>Search</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
