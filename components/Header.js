import stylesHeader from '../styles/Header.module.css'

const Header = () => {
    const x = 5;
    return ( 
        <div>
            <h1 className={stylesHeader.title}>
                Bienvenue sur <span> SOCKETS</span>
            </h1>
            <p className={stylesHeader.description}>Acheter des chaussettes</p>
            {/*<style jsx>
                {`
                    .title{
                        color: ${x>4 ? 'red' : 'blue'};
                    }
                `}
            </style>*/}
        </div>
     );
}
 
export default Header;