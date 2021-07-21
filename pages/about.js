import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/About.module.css'
import Link from 'next/link'

export default function About(){

    return (
        <div>
            <div className={styles.about}>
                <div className={styles.category}>ABOUT</div>
                <div className={styles.content}>
                    <div className={styles.contentimg}>
                        <img src="/logo-black.png" alt="logo black verstion"/>
                        <img src="/cf-logo-motion.gif" alt="logo gif animation ver for about"/>
                    </div>
                    <div className={styles.contenttxt}>This is about page. we will explain about crazy factory.</div>
                </div>
            </div>
        </div>
    )
}