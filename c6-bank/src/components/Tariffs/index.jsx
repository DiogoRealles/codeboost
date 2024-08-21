import image from '../../img/cards.png';
import {BsCreditCard, BsArrowLeftRight, BsCurrencyDollar, BsClock} from "react-icons/bs";

function Tariffs(){
  return(
    <section>
      <div className="tariffs">
        <div className="container">
          <div data-aos="fade-right" className="text">
            <h2>Sem tarifas:</h2>
            <p>economize seu dinheiro</p>

            <div className="infos">
              <div className="box">
                <div className="icon">
                  <BsCreditCard />
                </div>
                <div className="txt">
                  <h4>Saques nos caixas da rede Banco24Horas</h4>
                  <p>São mais de 23 mil caixas em 680 municípios do  Brasil. Saques ilimitados sem cobrança de tarifa.</p>
                </div>
              </div>
              
              <div className="box">
                <div className="icon">
                  <BsArrowLeftRight />
                </div>
                <div className="txt">
                  <h4>Transferências e TEDs ilimitadas</h4>
                  <p>Movimente seu dinheiro para qualquer conta em qualquer banco sem pagar nada por isso.</p>
                </div>
              </div>
              
              <div className="box">
                <div className="icon">
                  <BsCurrencyDollar />
                </div>
                <div className="txt">
                  <h4>Depósito por boleto</h4>
                  <p>Emita boletos grátis e traga dinheiro para a sua conta C6 sem pagar tarifas.</p>
                </div>
              </div>
              
              <div className="box">
                <div className="icon">
                  <BsClock />
                </div>
                <div className="txt">
                  <h4>Atendimento 24h</h4>
                  <p>Conte com a gente 24h por dia, 7 dias por semana pelo chat do app.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="image">
            <div data-aos="fade-up">
              <img src={image} alt="Cards" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tariffs;