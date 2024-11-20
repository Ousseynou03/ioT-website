import React from 'react';
import aboutUs from '../assets/control.png';
import fireAlarm from '../assets/Icons/fire-alarm.png';
import securityGate from '../assets/Icons/security-gate.png';
import alarm from '../assets/Icons/alarm.png';
import bell from '../assets/Icons/bell.png';
import camera from '../assets/Icons/cctv-camera.png';
import teamwork from '../assets/Icons/teamwork.png';


const About = () => {

    const services = [
        {
            id: 1, 
            title: "Notifications", 
            descrition: "Restez à jour qvec un journal complet des événements dans la notification.", 
            image:bell
        }, 
        {
            id: 2, 
            title: "Caméra en direct", 
            descrition: "gardez une trace de votre maison oû que vous soyez", 
            image:camera
        },
        {
            id: 2, 
            title: "Détecteurs de Fumée et Gaz Connectés", 
            descrition: "Soyez alerté immédiatement en cas de détection de fumée ou de gaz, même à distance.", 
            image : fireAlarm
        },
        {
            id: 2, 
            title: "Capteurs de Fenêtres et Portes", 
            descrition: "Recevez des alertes si une porte ou fenêtre est ouverte sans autorisation.", 
            image:securityGate
        },
        {
            id: 2, 
            title: "Alarmes Intrusion Intelligentes", 
            descrition: "Détectez les intrusions et recevez des alertes instantanées via notifications ou SMS.", 
            image:alarm
        },
        {
            id: 3, 
            title: "Mode invité", 
            descrition: "Donnez à vos amis et proches un accês unique aux portes ouvertes.", 
            image:teamwork
        }
    ]
    return (
        <div>
            {/* About text*/}
            <div className='px-4 lg:px-4 max-w-screen-2x1 mx-auto my-8' id='security'>
                <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12'>
                    <div>
                        <img src={aboutUs} alt="" className='w-auto'/>
                    </div>
                    <div className='md:w-3/5 mx-auto'>
                        <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5'>
                        Votre tranquillité d&lsquo;esprit assurée !
                        </h2>
                        <p className='md:w-3/4 text-sm text-neutralGrey mb-8'>
                        Sécurité maximale garantie avec notre système d&lsquo;alarme anti-intrusion. Protégez votre domicile ou votre entreprise efficacement contre toute intrusion grâce à notre technologie avancée et notre surveillance 24/7.
                        </p>
                        <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12'>
                            {
                                services.map(service => 
                                    <div key={service.id} className="px-4 py-8 text-center md:w-[250px]
                                    mx-auto md:h-80 rounded-md  shadow cursor-pointer hover:-transition-y-5 hover:border-b-4
                                    hover:border-indigo-700 transition-all duration-300 flex items-center justify-around
                                    h-full">
                                        <div>
                                            <div className="bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-t1-3x1 rounded-br-3xl"><img src={service.image} alt="" /></div>
                                            <h4 className="text-2xl font-bold text-neutralDGrey mb-2 px-2">{service.title}</h4>
                                            <p className="text-sm text-neutralGrey">{service.descrition}</p>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>

            {/* company stats */}
            <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSliver py-16'>
                <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
                    <div className='md:w-1/2'>
                        <h2 className='text-4xl text-neutralDGrey font-semibold mb-4 md:w-2/3'>
                        Des solutions connectées, des résultats mesurables
                        </h2>
                        <p className='md:w-3/4 text-sm text-neutralGrey mb-8'>
                        Découvrez l’impact concret de nos systèmes IoT grâce à des chiffres impressionnants.
                        </p>
                    </div>

                    {/* stats */}
                    <div className='md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around
                    gap-12'>
                        <div className='space-y-8'>
                            <div className='flex items-center gap-4'>
                                <img src="/src/assets/Icons/flash.png" alt="" className='w-12'/>
                                <div>
                                    <h4 className='text-2xl text-neutralDGrey font-semibold'>30%</h4>
                                    <p>
                                    d’économies d’énergie grâce à l’automatisation intelligente et la gestion optimisée de la consommation.
                                    </p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <img src="/src/assets/Icons/responsive.png" alt="" className='w-12'/>
                                <div>
                                    <h4 className='text-2xl text-neutralDGrey font-semibold'>Plus de 10 000</h4>
                                    <p>appareils connectés pris en charge, couvrant des catégories variées comme l’éclairage, la sécurité, et le divertissement.</p>
                                </div>
                            </div>
                        </div>
                        <div className='space-y-8'>
                            <div className='flex items-center gap-4'>
                                <img src="/src/assets/Icons/partners.png" alt="" className='w-12'/>
                                <div>
                                    <h4 className='text-2xl text-neutralDGrey font-semibold'>95%</h4>
                                    <p>
                                    des utilisateurs déclarent une amélioration de leur confort quotidien après avoir intégré nos solutions.
                                    </p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <img src="/src/assets/Icons/buildings.png" alt="" className='w-12'/>
                                <div>
                                    <h4 className='text-2xl text-neutralDGrey font-semibold'>10 minutes</h4>
                                    <p>Une installation et une configuration moyenne en moins de 10 minutes, pour un accès rapide au confort connecté</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default About;