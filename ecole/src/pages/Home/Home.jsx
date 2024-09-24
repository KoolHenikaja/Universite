import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import ChooserSection from '../../components/ChooserSection/ChooserSection';
import StartCoursesImg from '../../utils/images/start-courses-img.jpg';
import FaqAccordion from '../../components/FaqAccordion/FaqAccordion';
import { Card } from 'react-bootstrap';
import Blog1Img from '../../utils/images/blog1-img.jpg';
import Blog2Img from '../../utils/images/blog2-img.jpg';
import Blog3Img from '../../utils/images/blog3-img.jpg';

const blogs = [
  {
    id:1,
    img: [Blog1Img],
    title: 'Blog 1',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, quibusdam quoi.Eveniet aperiam tempore distinctio culpa reprehenderit doloremque labore voluptates.'
  },
  {
    id:2,
    img: [Blog2Img],
    title: 'Blog 2',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, quibusdam quoi.Eveniet aperiam tempore distinctio culpa reprehenderit doloremque labore voluptates.'
  },
  {
    id:3,
    img: [Blog3Img],
    title: 'Blog 3',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque, quibusdam quoi.Eveniet aperiam tempore distinctio culpa reprehenderit doloremque labore voluptates.'
  }
];

const Home = () => {
  return (
    <div className='home-page'>
      <header className='h-100 min-vh-100 d-flex align-items-center
      text-light'>
        <div className='container d-flex flex-column
        align-items-center'>
          <h2 data-aos="fade-down">Bienvenue à</h2>
          <h1 data-aos="fade-left" className='text-center fw-semibold'>React Université </h1>
          <p data-aos="fade-up">Notre mission est de former les leaders de demain, encourager la curiosité intellectuelle et promouvoir
            un culture de collaboration et d'inclusion. à React Université, les étudiants, les proffesseurs et les anciens élèves
            forment un réseau mondial influent, dédié à l'amélioration du bien-être de la société à travers l'apprentissage,
            le service public et innovation.
          </p>
          <div className='d-flex flex-column flex-sm-row
          align-items-center'>
             <Link to='/courses'>
               <button data-aos="fade-right" type='button' className='btn btn-danger
               btn-lg mx-0 mx-sm-2 my-2 my-sm-0'> Voir nos formations</button>
             </Link>
             <Link to='/contact'>
               <button data-aos="fade-left" type='button' className='btn 
               btn-outline-light btn-lg mx-0 mx-sm-2 my-2
               my-sm-0'>Contactez-nous</button>
             </Link>
          </div>
        </div>
      </header>
      <div className='py-5'>
        <ChooserSection />
      </div>

      <div className='py-5 bg-light'>
        <div className='container'>
          <div className='row d-flex align-items-center
          justify-content-around'>
            <div className='col-lg-5'>
              <h2 data-aos="fade-right" className='text-capitalize'>Nous commençons la formations sur cette années 2024</h2>
              <p data-aos="fade-down">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Sit cumque error est expedita!</p>
              <Link to='/courses'>
                 <button data-aos="fade-up" type='button' className='btn
                 btn-danger btn-lg mx-0 mx-sm-2 my-2
                 my-sm-0'>Apprendre encore plus</button>
              </Link>
            </div>
            <div className='col-lg-5 mt-5 mt-lg-0'>
              <img data-aos="fade-left" src={StartCoursesImg} className='img-fluid' alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className='py-5'>
        <FaqAccordion />
      </div>

      <div className='blog-section text-light py-5'>
        <div className='container d-flex flex-column
        align-items-center'>
          <h2 data-aos="fade-down" className='text-center text-capitalize mb-5'>Dernières sur le blog</h2>
          <div data-aos="fade-up" className='row g-4'>
            {blogs.map((blog) =>(
              <div key={blog.id} className='col-md-6 col-lg-4'>
                  <Link to='/blog' 
                  className='text-decoration-none'>
                     <Card className='h-100 shadow 
                     scale-hover-effect'>
                       <Card.Img  variant='top' src={blog.img}/>
                       <Card.Body className='p-md-5'>
                           <Card.Title>{blog.title}</Card.Title>
                           <Card.Text>{blog.description}</Card.Text>
                       </Card.Body>
                     </Card>
                  </Link>
              </div>
            ))}
          </div>
          <Link to='/blog'>
             <button data-aos="zoom-out" type='button' className='btn btn-danger
             btn-lg mt-5'>En savoir plus de Blogs</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home;
