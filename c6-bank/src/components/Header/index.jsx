import logo from '../../img/logo-white.svg';

function Header(){
  return(
    <header data-aos="fade-down">
      <div className="container">
        <a href="./" className="logo"><img src={logo} alt="Logo" /></a>
        
        <ul className='menu'>
          <li><a href="#">Para você</a></li>
          <li><a href="#">Para o seu negócio</a></li>
        </ul>

        <button className="btn btn-yellow">Abra sua conta</button>
      </div>
    </header>
  )
}

export default Header;  