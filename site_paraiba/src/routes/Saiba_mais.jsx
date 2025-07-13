import React from 'react'
import Augusto from '../img/500px-Augusto_Anjos.jpg'
import Ariano_Suassuna from '../img/Ariano Suassuna.jpg'
import Jackson from '../img/Jackson.jpg'
import { Link } from 'react-router-dom'
const Saiba_mais = () => {
  return (
    <div>
      <h1>Principais Nomes da Paraíba </h1>
      <p>Conheça os principais nomes que marcaram a história da Paraíba, desde os primeiros habitantes até os líderes políticos contemporâneos.</p>
      <div id="carouselExampleDark" className="carousel carousel-dark slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active mx-auto p-2" data-bs-interval="10000">
            <div className='d-flex justify-content-center'>
              <div className='card' style={{width: '25vw'}}>
                <img src={Augusto} className='card-img-top img-card-carousel mx-auto p-2' style={{height: "30vh"}} alt="Augusto dos Anjos" />
                <div className='card-body'>
                  <h5 className='card-title'>Augusto dos Anjos</h5>
                  <h6 className='card-text text-center p-2'>Foi um poeta e professor brasileiro reconhecido como um dos principais expoentes do simbolismo e do pré-modernismo brasileiro. Sua obra é marcada pela versificação considerada imprópria para a época, pela crítica à hipocrisia social e à ética.</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item mx-auto p-2" data-bs-interval="2000">
            <div className='d-flex justify-content-center'>
              <div className='card' style={{width: '25vw'}}>
                <img src={Ariano_Suassuna} className='card-img-top img-card-carousel mx-auto p-2' style={{height: "35vh"}} alt="Nome 2" />
                <div className='card-body'>
                  <h5 className='card-title'>Ariano Suassuna</h5>
                  <h6 className='card-text text-center p-2'>"Ariano Suassuna é um dramaturgo brasileiro. Ele nasceu em 16 de junho de 1927, em João Pessoa, no estado da Paraíba. Mais tarde, ele se formou em Direito e em Filosofia, foi professor da Universidade Federal de Pernambuco, além de exercer o cargo de secretário de Cultura do estado de Pernambuco.".</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item mx-auto p-2">
            <div className='d-flex justify-content-center'>
              <div className='card' style={{width: '25vw'}}>
                <img src={Jackson} className='card-img-top img-card-carousel mx-auto p-2' style={{height: "30vh"}} alt="Nome 3" />
                <div className='card-body'>
                  <h5 className='card-title'>Jackson do Pandeiro</h5>
                  <h6 className='card-text text-center p-2'>Foi cantor, compositor e instrumentista. Fã de filmes de faroeste, seu nome foi inspirado em Jack Perry, estrela dos filmes do gênero na época. Desse modo passou a ser conhecido como Jack do Pandeiro após iniciar como pandeirista.</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <footer className='bg-dark text-white mt-5'>
        <h2 className='text-center'>site oficial do Estado da paraíba</h2>
        <Link className='text-white d-flex justify-content-center' to="https://paraiba.pb.gov.br"><button style={{border:'none'}}>https://paraiba.pb.gov.br</button></Link>
      </footer>
    </div>
  )
}

export default Saiba_mais