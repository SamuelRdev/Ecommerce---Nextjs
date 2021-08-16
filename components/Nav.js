import Link from 'next/Link'
import StylesNav from '../styles/Nav.module.css';
const Nav = () => {
    return ( 
        <div className={StylesNav.nav}>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
            </ul>
        </div>
     );
}
 
export default Nav;