import React from 'react'
import Nav_bar from '../components/Nav_bar'
import '../App.css'
import Paraiba from '../img/Paraiba.jpg'
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

          <main className='row align-center p'> 
              <aside className='col-3 '><img src={Paraiba} alt="" className='thumbnail float-start'/></aside>
              <article className='col-9'> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, quaerat! Tempora ad reprehenderit, ea velit laboriosam est rerum neque eum sit, voluptates sunt. Dicta mollitia iste facilis repellendus perspiciatis magni!</article>
          </main>
      </div>
      
          <h2 className='text-center '>Políticos</h2>
          <section className='row'>
            <div className='card mx-auto p-2' style={{width: '18rem'}}>
              <img src='...' className='card-image-top' alt='...'/>
              <div className='card-body'>
                <h5 className='card-title'>João Azevedo</h5>
                <h6 className='card-subtitle'>  Governador da Paraíba</h6>
                <p className='card-text text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam odio repudiandae quis dolorem atque, ex laborum necessitatibus unde, eligendi modi magni, harum a distinctio debitis nulla dolore? Illum, sit quae?</p>
              </div>
            </div>
            <div className='card mx-auto p-2' style={{width: '18rem'}}>
              <img src='...' className='card-image-top' alt='...'/>
              <div className='card-body'>
                <h5 className='card-title'>João Azevedo</h5>
                <h6 className='card-subtitle'>  Governador da Paraíba</h6>
                <p className='card-text text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam odio repudiandae quis dolorem atque, ex laborum necessitatibus unde, eligendi modi magni, harum a distinctio debitis nulla dolore? Illum, sit quae?</p>
              </div>
            </div>
          </section>
    </div>
    
  )
}
export default Home