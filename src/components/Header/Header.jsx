import './Header.css'
import logo from '../../assets/logo.png'

function Header() {
    return (
        <header>
            <section className="header">
                <div className="logo">
                    <img className="logo-img" src={logo} />
                </div>
                <div className="titles">
                    <h1 className="title">Bienvenue sur Pic-Share</h1>
                    <h2 className='subtitle'>Partagez vos souvenirs</h2>
                </div>
                <div className="buttons">
                    <button className='connexion'>Connexion</button>
                    <button className='inscription'>Inscription</button>
                </div>
            </section>
        </header>
    );
}

export default Header