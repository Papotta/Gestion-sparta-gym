import React from 'react';

function SeccionTres(){
  return(
    <div className='SeccionTres'>    
             <h1>Nuestros entrenadores</h1>
             <p id='parrafoEntrenadores'>¡Te esperamos en el gimnasio que lo tiene todo! Aparatos nuevos de última generación, caminadores profesionales, bicis de spinning, escaladores, elípticas,  remos ergómetros. <br/> 
             Entrenadores certificados siempre disponibles en sala, el mejor ambiente y un estricto protocolo sanitario para cuidarte. Vení a divertirte!</p>
             <div class="row">
                <div class="col-md-6">                
                    <div className='EntrenadorUno'>               
                        <img src='https://micarrerauniversitaria.com/wp-content/uploads/2018/03/entrenador-deportivo-6.jpg' height='300'/> 
                    </div>                  
                </div>
                 <div class="col-md-6">             
                    <div className='EntrenadorDos'>               
                        <img src='https://micarrerauniversitaria.com/wp-content/uploads/2018/03/entrenador-deportivo-6.jpg' height='300'/>
                    </div>    
                </div>                            
            </div>       
    </div>
  );
}

export default SeccionTres;