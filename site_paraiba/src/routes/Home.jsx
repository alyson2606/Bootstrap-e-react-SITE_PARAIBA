import React from 'react'
import Nav_bar from '../components/Nav_bar'
import '../App.css'
import Paraiba from '../img/Paraiba.jpg'
import Cícero from '../img/Cícero Lucena.jpg'
import João_Azevedo from '../img/João Azevedo.jpg'
import {Link} from 'react-router-dom'
const Home = () => {

  return (
   
    <div>
      <Nav_bar/>
      <div className="container-fluid">
        <div class='mascara'>
            <h1 className='fw-bold' id='ola'>A história da Paraiba </h1>
            <div className='row'>
              <p className='col-11'> <span className='fw-bold fs-1 '>A</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus voluptate dicta blanditiis eligendi delectus, laborum ex fugit alias minus inventore vel dolor consequuntur eos quam? Inventore voluptates debitis dolorum quia! 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, quaerat provident optio veniam consequuntur quidem ipsa ipsam vel consequatur obcaecati, harum repellat ex odio! Debitis quisquam maiores nesciunt autem ad!
              </p>
            </div>
          </div>

          <main className='row align-center' id='bandeira'> 
            <h2 className='col-12'>Bandeira</h2>
            <aside className='col-3 mt-4 align-between'><img src={Paraiba} alt="" className='thumbnail float-start '/></aside>
             
              <article className='col-9'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, quaerat! Tempora ad reprehenderit, ea velit laboriosam est rerum neque eum sit, voluptates sunt. Dicta mollitia iste facilis repellendus perspiciatis magni!</article>
          </main>
      </div>
      
                  <h2 className="text-center mb-4">Políticos</h2>
        <section className="row justify-content-center" id="governo">
          <div className="card mx-3 mb-4 p-0 shadow" style={{ width: '20rem' }}>
            <img src={João_Azevedo} className="card-img-top img-card rounded-top" alt="João Azevedo" />
            <div className="card-body">
              <h5 className="card-title text-center fw-bold">João Azevedo</h5>
              <h6 className="card-subtitle mb-2 text-muted text-center">Governador da Paraíba</h6>
              <p className="card-text text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam odio repudiandae quis dolorem atque, ex laborum necessitatibus unde, eligendi modi magni, harum a distinctio debitis nulla dolore? Illum, sit quae?
              </p>
            </div>
          </div>
          <div className="card mx-3 mb-4 p-0 shadow" style={{ width: '20rem' }}>
            <img src={Cícero} className="card-img-top img-card rounded-top" alt="Cícero Lucena" />
            <div className="card-body">
              <h5 className="card-title text-center fw-bold">Cícero Lucena</h5>
              <h6 className="card-subtitle mb-2 text-muted text-center">Prefeito da Capital</h6>
              <p className="card-text text-center">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam odio repudiandae quis dolorem atque, ex laborum necessitatibus unde, eligendi modi magni, harum a distinctio debitis nulla dolore? Illum, sit quae?
              </p>
            </div>
          </div>
        </section>
        <footer className='bg-dark text-light p-4'>
          <h2 className='fw-bold'>Deseja saber mais?</h2>
            <Link to='/saibaMais'><button className='btn btn-primary'>Saiba Mais</button></Link>
        </footer>
      </div>
   
  )
}
export default Home