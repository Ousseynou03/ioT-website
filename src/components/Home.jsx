import React from 'react';
import { Carousel } from "flowbite-react";
import banner1 from "../assets/inovation.png";
import connectivity from "../assets/connectivity.png";
import simple from "../assets/iot_illustration.png";

const Home= () =>{
    return (
        <div className='bg-neutralSilver' id='home'>
            <div className='px-4 lg:px-14 max-w-screen-2x1 mx-auto min-h-screen h-screen'>
                <Carousel className='w-full mx-auto duration-300'>
                    <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row items-center h-full justify-between 
                    gap-12">
                        <div>
                            <img src={simple} alt='' className='w-auto'/>
                        </div>
                        <div className='md:w-1/2'>
                            <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>
                            Transformez votre quotidien avec
                            <span className='text-brandPrimary leading-snug'> l&lsquo;Internet des Objets</span></h1>
                            <p className='text-neutralGrey text-base mb-8'>
                                Des solutions connectées qui simplifient la vie et boostent votre productivité. Découvrez un avenir intelligent.
                            </p>
                            <button className='btn-primary'>Contactez nous</button>
                        </div>
                    </div>
                    <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row items-center h-full justify-between 
                    gap-12">
                        <div>
                            <img src={connectivity} alt='' className='w-auto'/>
                        </div>
                        <div className='md:w-1/2'>
                            <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>Des solutions adaptées à vos  
                            <span className='text-brandPrimary leading-snug'> à vos besoins</span></h1>
                            <p className='text-neutralGrey text-base mb-8'> Gestion à distance, automatisation, sécurité renforcée. Nos technologies IoT offrent tout cela et bien plus.
                            </p>
                            <button className='btn-primary'>Contactez nous</button>
                        </div>
                    </div>
                    <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row items-center h-full justify-between
                    gap-12">
                        <div>
                            <img src={banner1} alt='' className='w-auto'/>
                        </div>
                        <div className='md:w-1/2'>
                            <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>Innovation et fiabilité  
                            <span className='text-brandPrimary leading-snug'> au cœur de nos produits</span></h1>
                            <p className='text-neutralGrey text-base mb-8'> Nous combinons expertise technique et design moderne pour des solutions sur mesure
                            </p>
                            <button className='btn-primary'>Contactez nous</button>
                        </div>
                    </div>
                </Carousel>
            </div>
        </div>
    );
}

export default Home;