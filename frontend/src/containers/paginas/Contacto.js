import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Layout from '../../hocs/Layout';


function Contacto(){
  return(
    <Layout>
    <section className='Contacto'>       
         <div className='container'>
                <div className='row'>
                  <h1>Contacto</h1>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <div className='col-12 col-md-1'>
                                          
                  </div>
                  <div className='col-12 col-md-5'>
                      <p className='ParrafoContacto'>Te responderemos dentro de las 24 horas.</p>   
                      <br></br>
                      <br></br>
                      <br></br>
                      <br></br>
                      <p className='ParrafoContacto'>Email: spartagyym@gmail.com<br></br>
                        Whatsapp: +5999 9999 99<br></br>
                        Dirección: Uruguay 1444, Salto, Uruguay</p>          
                  </div>
                  <div className='col-12 col-md-5'>
                      <p className='ParrafoContacto'>Deja tu información y te contactaremos muy pronto</p> 
                      <br></br>
                      <br></br>
                      <Form>
                          <Form.Group className="mb-3" controlId="Nombre">                            
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="input"/>
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="Email">                            
                            <Form.Label>E-Mail</Form.Label>
                            <Form.Control type="email" placeholder="email@gmail.com" />
                          </Form.Group>
                          <Form.Group className="mb-3" controlId="Mensaje1">
                            <Form.Label>Mensaje</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                          </Form.Group>
                          <Button variant="dark">Enviar</Button>
                       </Form>                                         
                  </div>
                  <div className='col-12 col-md-1'>
                                
                  </div>                
                </div>
                <div className='row'>
                  
                </div>
              </div>               
              <br></br>
              <br></br>
              <br></br>
              <br></br> 
              <br></br>
              <br></br>  
              <br></br>             
    </section>
    </Layout>
  );
}

export default Contacto;