import React from 'react'
import './FaqAccordion.css';
import { Accordion } from 'react-bootstrap';

const FaqAccordion = () => {
  return (
    <div className='faq-section'>
        <div className='container d-flex flex-column align-items-center'>
            <h2 data-aos="fade-down" className='text-center text-capitalize mb-5'>Questions demandées plus fréquenté</h2>
            <p data-aos="fade-right" className='text-center mb-5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aperiam quaerat soluta atque molestias corporis quasi inventore ipsa, 
              architecto obcaecati velit numquam aspernatur maxime officia odit temporibus molestiae ullam nihil.
            </p>
            <Accordion defaultActiveKey='' flush>
                <Accordion.Item eventKey='0' data-aos="fade-right">
                    <Accordion.Header>Première Question ?</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                      Reiciendis nostrum ipsam voluptatibus a dicta illum sint excepturi, 
                      harum consequatur earum nesciunt tenetur culpa cumque doloremque inventore, 
                      asperiores libero totam incidunt? Ipsa?
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1' data-aos="fade-down">
                    <Accordion.Header>Deuxième Question ?</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                      Reiciendis nostrum ipsam voluptatibus a dicta illum sint excepturi, 
                      harum consequatur earum nesciunt tenetur culpa cumque doloremque inventore, 
                      asperiores libero totam incidunt? Ipsa?
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2' data-aos="fade-up">
                    <Accordion.Header>Troisième Question ?</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                      Reiciendis nostrum ipsam voluptatibus a dicta illum sint excepturi, 
                      harum consequatur earum nesciunt tenetur culpa cumque doloremque inventore, 
                      asperiores libero totam incidunt? Ipsa?
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='3' data-aos="fade-left">
                    <Accordion.Header>Quatrième Question ?</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                      Reiciendis nostrum ipsam voluptatibus a dicta illum sint excepturi, 
                      harum consequatur earum nesciunt tenetur culpa cumque doloremque inventore, 
                      asperiores libero totam incidunt? Ipsa?
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    </div>
  )
}

export default FaqAccordion
