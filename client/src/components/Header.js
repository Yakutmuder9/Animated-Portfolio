
const Header = () => {
    return (
        <nav className="navbar navbar-defaullt">
            <div className="container-fluid">
                <a href="/" className="navbar-brand">
                    <img width="50" height="50" src="images/logo.png" alt="logo" />
                </a>
                <ul className="nav navbar-nav">
                    <li><a href="/">Home</a></li>
                    <li><a href="/#about">About</a></li>
                    <li><a href="/#about">Contact</a></li>
                    <li><a href="/#about">Projects</a></li>
                    <li><a href="/#about">Login</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Header
