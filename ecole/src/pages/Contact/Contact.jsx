import React, { useState } from 'react';
import './Contact.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import AntananarivoLocationImg from '../../utils/images/Antananarivo-location.jpg';
import FianarantsoaLocationImg from '../../utils/images/Fianarantsoa-location.jpg';
import ToamasinaLocationImg from '../../utils/images/Toamasina-location.jpg';
import Spinner from '../Spinner/Spinner';

function Contact() {

  const [isSubmitting , setIsSubmitting] = useState(false);

  const handleSubmit = (event) => {
    event.preventFefault();
    setIsSubmitting(true);

    setTimeout(() => {
        setIsSubmitting(false);
        alert(' Formulaire soumis');
    }, 2000);
  };
  return (
    <div className='contact-page'>
        <header className='h-100 min-vh-100 d-flex align-items-center text-light'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 data-aos="fade-down" className='text-center fw-semibold'>Entrer en Contact</h1>
                <p data-aos="fade-up" className='text-center w-75 mb-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae pariatur qui quos aspernatur, voluptatem autem possimus esse quo consequatur omnis, soluta consectetur ullam ipsum cum!</p>
            </div>
        </header>

        <div className='container my-5 d-flex justify-content-center'>
            <Form id='contact-form' onSubmit={handleSubmit}>
                <Row className='mb-3'>
                    <Col sm={12} md={6} className='mb-3 mb-md-0'>
                        <Form.Label>Nom</Form.Label>
                        <Form.Control placeholder='Saisissez votre nom' required />
                    </Col>
                    <Col sm={12} md={6}>
                        <Form.Label>Prénom</Form.Label>
                        <Form.Control placeholder='Saisissez votre prénom' required />
                    </Col>
                </Row>

                <Form.Group className='mb-3'>
                    <Form.Label>Adresse E-mail</Form.Label>
                    <Form.Control type='email' placeholder='Saisissez votre e-mail'required />
                    <Form.Text className='text-muted'>
                        Nous ne partagerons jamais votre e-mail avec quelqu'un d'autre.
                    </Form.Text>
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label>Addresse Locale</Form.Label>
                    <Form.Control placeholder='Saisissez votre adresse locale' required />
                </Form.Group>

                <Row className='mb-3'>
                    <Col sm={12} md={6} className='mb-3 mb-md-0'>
                        <Form.Label>Localisation</Form.Label>
                        <Form.Select defaultValue="Antananarivo" required>
                            <option>Antananarivo</option>
                            <option>Fianarantsoa</option>
                            <option>Toamasina</option>
                        </Form.Select>
                    </Col>
                    <Col sm={12} md={6}>
                        <Form.Label>Code Postale</Form.Label>
                        <Form.Control placeholder='Saisissez votre code postale' required />
                    </Col>
                </Row>

                <Form.Group className='mb-3'>
                    <Form.Label>Petit message</Form.Label>
                    <Form.Control as="textarea" rows={3} required />
                </Form.Group>

                <Button variant="danger btn-lg" type='submit'>{isSubmitting ? <Spinner /> : 'Envoyer'}</Button>
            </Form>
        </div>
        
        <div className='bg-dark text-light p-5'>
            <div className='container'>
                <h2 className='text-center mb-5'>Nos emplacements</h2>
                <div className='row g-4'>
                    <div data-aos="fade-right" className='col-lg-4 d-flex flex-column align-items-center'>
                        <img src={AntananarivoLocationImg} className='img-fluid' alt="" />
                        <h3 className='text-center mt-3'>Antananarivo</h3>
                    </div>
                    <div data-aos="zoom-in" className='col-lg-4 d-flex flex-column align-items-center'>
                        <img src={FianarantsoaLocationImg} className='img-fluid' alt="" />
                        <h3 className='text-center mt-3'>Fianarantsoa</h3>
                    </div>
                    <div data-aos="fade-left" className='col-lg-4 d-flex flex-column align-items-center'>
                        <img src={ToamasinaLocationImg} className='img-fluid' alt="" />
                        <h3 className='text-center mt-3'>Toamasina</h3>
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact;