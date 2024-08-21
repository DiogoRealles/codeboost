import {BsWifi} from "react-icons/bs";
import mockup from '../../img/mockup.png';
import card from '../../img/card-black.png';
import logo from '../../img/logo-white.svg';

function Footer(){
  return(
    <footer>
      <div className="container">
        <div className="top">
          <div data-aos="fade-right" className="text">
            <h2>Um banco completo</h2>
            <p>com produtos exclusivos</p>
          </div>

          <div data-aos="fade-left" className="btns">
            <button className="btn btn-dark">Para você</button>
            <button className="btn btn-outline-white">Para sua empresa</button>
          </div>
        </div>

        <div data-aos="fade-up" className="box">
          <div className="text">
            <h4>Conta com cartão<br />
            C6 Business</h4>
            <p>A conta MEI é completa e não tem tarifa de manutenção. Além disso, você pode ter um cartão de crédito sem anuidade.</p>
            <div className="icon">
              <span><BsWifi /></span>
              <p>Aproxime e pague</p>
            </div>
          </div>

          <div className="image">
            <img className="mockup" src={mockup} alt="Mockup" />
            <img className="logo" src={logo} alt="logo" />
            <img className="card-black" src={card} alt="Card" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;