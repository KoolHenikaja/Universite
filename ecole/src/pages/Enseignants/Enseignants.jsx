import React from 'react'
import './Enseignants.css';
import aos from 'aos';
import Professeur1 from '../../utils/images/professeur1-img.jpg';
import Professeur2 from '../../utils/images/professeur2-img.jpg';
import Professeur3 from '../../utils/images/professeur3-img.jpg';
import Professeur4 from '../../utils/images/professeur4-img.jpg';
import Professeur5 from '../../utils/images/professeur5-img.jpg';


const Enseignants = () => {
  return (
    <div className='professeur-page'>
       <header className='h-100 min-vh-100 d-flex align-items-center text-light'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 data-aos="fade-down" class="aos-init aos-animate" className='text-center fw-semibold'>Quelques enseignants</h1>
                <p data-aos="fade-up" className='text-center w-75 mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.</p>
            </div>
        </header>
        <div className='container my-5'>
          <div className='row'>
            <div className='col text-center'>
              <h2 data-aos="fade-down">Les enseignants permanents</h2>
              <hr />
            </div>
          </div>
        </div>
        <div className='container my-4'>
          <div className='row'>
            <div data-aos="fade-right" className='col-12 col-md-6 col-lg-3 p-3'>
              <div className='p-card'>
                <div className='p-cover overflow-hidden'>
                  <img src={Professeur1} className='img-fluid' alt="" />
                </div>
                <div className='p-name'>
                  <b>RASOAZANANIERA Flavienne</b>
                </div>
                <div className='p-role'>
                  <strong>
                    <span>Directrice de l'Ecole</span>
                  </strong>
                  <br />
                  <span>Maître de Conférence en Droit Publique</span>
                  <br />
                  <span>Droit public et droit privée</span>
                </div>
              </div>
            </div>
            <div data-aos="zoom-in" className='col-12 col-md-6 col-lg-3 p-3'>
              <div className='p-card'>
                <div className='p-cover overflow-hidden'>
                  <img src={Professeur2} className='img-fluid' alt="" />
                </div>
                <div className='p-name'>
                  <b>RASOAZANANIERA Flavienne</b>
                </div>
                <div className='p-role'>
                  <strong>
                    <span>Directrice de l'Ecole</span>
                  </strong>
                  <br />
                  <span>Maître de Conférence en Droit Publique</span>
                  <br />
                  <span>Droit public et droit privée</span>
                </div>
              </div>
            </div>
            <div data-aos="zoom-in" className='col-12 col-md-6 col-lg-3 p-3'>
              <div className='p-card'>
                <div className='p-cover overflow-hidden'>
                  <img src={Professeur3} className='img-fluid' alt="" />
                </div>
                <div className='p-name'>
                  <b>RASOAZANANIERA Flavienne</b>
                </div>
                <div className='p-role'>
                  <strong>
                    <span>Directrice de l'Ecole</span>
                  </strong>
                  <br />
                  <span>Maître de Conférence en Droit Publique</span>
                  <br />
                  <span>Droit public et droit privée</span>
                </div>
              </div>
            </div>
            <div data-aos="fade-left" className='col-12 col-md-6 col-lg-3 p-3'>
              <div className='p-card'>
                <div className='p-cover overflow-hidden'>
                  <img src={Professeur4} className='img-fluid' alt="" />
                </div>
                <div className='p-name'>
                  <b>RASOAZANANIERA Flavienne</b>
                </div>
                <div className='p-role'>
                  <strong>
                    <span>Directrice de l'Ecole</span>
                  </strong>
                  <br />
                  <span>Maître de Conférence en Droit Publique</span>
                  <br />
                  <span>Droit public et droit privée</span>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" className='col-12 col-md-6 col-lg-3 p-3'>
              <div className='p-card'>
                <div className='p-cover overflow-hidden'>
                  <img src={Professeur5} className='img-fluid' alt="" />
                </div>
                <div className='p-name'>
                  <b>RASOAZANANIERA Flavienne</b>
                </div>
                <div className='p-role'>
                  <strong>
                    <span>Directrice de l'Ecole</span>
                  </strong>
                  <br />
                  <span>Maître de Conférence en Droit Publique</span>
                  <br />
                  <span>Droit public et droit privée</span>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" className='col-12 col-md-6 col-lg-3 p-3'>
              <div className='p-card'>
                <div className='p-cover overflow-hidden'>
                  <img src={Professeur5} className='img-fluid' alt="" />
                </div>
                <div className='p-name'>
                  <b>RASOAZANANIERA Flavienne</b>
                </div>
                <div className='p-role'>
                  <strong>
                    <span>Directrice de l'Ecole</span>
                  </strong>
                  <br />
                  <span>Maître de Conférence en Droit Publique</span>
                  <br />
                  <span>Droit public et droit privée</span>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" className='col-12 col-md-6 col-lg-3 p-3'>
              <div className='p-card'>
                <div className='p-cover overflow-hidden'>
                  <img src={Professeur5} className='img-fluid' alt="" />
                </div>
                <div className='p-name'>
                  <b>RASOAZANANIERA Flavienne</b>
                </div>
                <div className='p-role'>
                  <strong>
                    <span>Directrice de l'Ecole</span>
                  </strong>
                  <br />
                  <span>Maître de Conférence en Droit Publique</span>
                  <br />
                  <span>Droit public et droit privée</span>
                </div>
              </div>
            </div>
            <div data-aos="fade-up" className='col-12 col-md-6 col-lg-3 p-3'>
              <div className='p-card'>
                <div className='p-cover overflow-hidden'>
                  <img src={Professeur5} className='img-fluid' alt="" />
                </div>
                <div className='p-name'>
                  <b>RASOAZANANIERA Flavienne</b>
                </div>
                <div className='p-role'>
                  <strong>
                    <span>Directrice de l'Ecole</span>
                  </strong>
                  <br />
                  <span>Maître de Conférence en Droit Publique</span>
                  <br />
                  <span>Droit public et droit privée</span>
                </div>
              </div>
            </div>
            
          </div>
        </div>
    </div>
  )
}

export default Enseignants
