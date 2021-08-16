import Head from 'next/head'
import styles from '../styles/Layout.module.css'
import Nav from './Nav'
import Header from './Header'

const Layout = ({children}) => {
    return ( 
        <>
        <Nav/>
        <Header/>
        <div className={styles.container}>
            <Head>
            </Head>
            
            <main className={styles.main}>
                {children}
            </main>
      </div>
      </>
     );
}
 
export default Layout;