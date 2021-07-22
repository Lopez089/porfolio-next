import stylesNav from '../styles/nav.module.css'

const Nav = ({ children }) => {
  return (
    <nav className={stylesNav.nav}>
      <ul>
        {children}
      </ul>
    </nav>)
}

export default Nav
