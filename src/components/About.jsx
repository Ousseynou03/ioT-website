import React from 'react';
import aboutUs from '../assets/control.png';

const About = () => {

    const services = [
        {
            id: 1, 
            title: "Notifications", 
            descrition: "Restez à jour qvec un journal complet des événements dans la notification.", 
            image:"/src/assets/Icons/bell.png"
        }, 
        {
            id: 2, 
            title: "Caméra en direct", 
            descrition: "gardez une trace de votre maison oû que vous soyez", 
            image:"/src/assets/Icons/cctv-camera.png"
        },
        {
            id: 3, 
            title: "Mode invité", 
            descrition: "Donnez à vos amis et proches un accês unique aux portes ouvertes.", 
            image:"/src/assets/Icons/teamwork.png"
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
                            Spotify - Web Player Music for everyone
                        </h2>
                        <p className='md:w-3/4 text-sm text-neutralGrey mb-8'>
                            Spotify is a music streaming service that offers a vast library of songs, playlists, and podcasts.
                        </p>
                    </div>

                    {/* stats */}
                    <div className='md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around
                    gap-12'>
                        <div className='space-y-8'>
                            <div className='flex items-center gap-4'>
                                <img src="/src/assets/Icons/company1.png" alt="" className='w-12'/>
                                <div>
                                    <h4 className='text-2xl text-neutralDGrey font-semibold'>2,245,341</h4>
                                    <p>Members</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <img src="/src/assets/Icons/company2.png" alt="" className='w-12'/>
                                <div>
                                    <h4 className='text-2xl text-neutralDGrey font-semibold'>2,245,341</h4>
                                    <p>Members</p>
                                </div>
                            </div>
                        </div>
                        <div className='space-y-8'>
                            <div className='flex items-center gap-4'>
                                <img src="/src/assets/Icons/company3.png" alt="" className='w-12'/>
                                <div>
                                    <h4 className='text-2xl text-neutralDGrey font-semibold'>2,245,341</h4>
                                    <p>Members</p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4'>
                                <img src="/src/assets/Icons/buildings.png" alt="" className='w-12'/>
                                <div>
                                    <h4 className='text-2xl text-neutralDGrey font-semibold'>2,245,341</h4>
                                    <p>Members</p>
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