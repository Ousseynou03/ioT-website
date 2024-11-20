/* eslint-disable no-irregular-whitespace */
import React from "react";

const Services = () =>{
    const services = [
        {
            id: 1, 
            title: "Ok Google", 
            descrition: "Le système vocal intégré aux appareils Google, comme Google Nest et Android. Il offre des commandes vocales rapides pour contrôler vos appareils connectés, effectuer des recherches, ou planifier votre journée. Dites simplement 'Ok Google' pour commencer.", 
            image:"/src/assets/vocal_controller/microphone.png"
        }, 
        {
            id: 2, 
            title: "Amazon Alexa", 
            descrition: "La technologie vocale avancée d'Amazon, présente dans les appareils Echo et compatible avec de nombreux objets connectés. Alexa vous permet de gérer vos tâches, contrôler vos appareils domestiques et même faire vos achats en ligne, tout cela en utilisant votre voix.", 
            image:"/src/assets/vocal_controller/voice-assistant.png"
        },
        {
            id: 3, 
            title: "Google Assistant", 
            descrition: "Un assistant intelligent conçu pour vous aider à rester organisé et connecté. Disponible sur divers appareils, Google Assistant peut répondre à vos questions, contrôler vos appareils IoT et rendre votre quotidien plus simple grâce à ses fonctionnalités intuitives.", 
            image:"/src/assets/vocal_controller/google-assistant.png"
        }
    ]
    return (
        <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto" id="automatisation">
            <div className="text-center my-8">
                <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">Conçu pour l&lsquo;interopérabilité des objets connectés​ </h2>
                <p className="text-neutralGrey">Designed for the interoperability of connected objects</p>

                {/* company logo */}
                <div className="my-12 flex flex-wrap justify-between items-center gap-8">
                    <img src="/src/assets/logos/company1.png" alt="" className="w-24"/>
                    <img src="/src/assets/logos/company2.png" alt="" className="w-24"/>
                    <img src="/src/assets/logos/company3.png" alt="" className="w-24"/>
                    <img src="/src/assets/logos/company4.png" alt="" className="w-24"/>
                    <img src="/src/assets/logos/company5.png" alt="" className="w-24"/>
                </div>
            </div>

            {/* services cards */}
            <div className="mt-20 md:w-1/2 mx-auto text-center">
                <h2 className="text-4xl text-neutralDGrey font-semibold mb-3">Pilotage vocal des systèmes IoT
                </h2>
                <p className="text-neutralGrey">
                Prenez le contrôle de vos appareils connectés sans lever le petit doigt grâce à des assistants vocaux innovants. Que ce soit avec Ok Google, Amazon Alexa, ou Google Assistant, nos solutions IoT s’intègrent parfaitement pour vous offrir une expérience fluide, pratique et entièrement personnalisée. Parlez, et laissez la technologie faire le reste !
                </p>
            </div>

            {/* cards */}
            <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12'>
                {
                    services.map(service => 
                        <div key={service.id} className="px-4 py-8 text-center md:w-[350px]
                        mx-auto md:h-80 rounded-md  shadow cursor-pointer hover:-transition-y-5 hover:border-b-4
                        hover:border-indigo-700 transition-all duration-300 flex items-center justify-center
                        h-full ">
                            <div>
                                <div className="bg-[#E8F5E9] mb-4 h-14 w-14 mx-auto rounded-t1-3x1 rounded-br-3xl">
                                    <img src={service.image} alt="" />
                                </div>
                                <h4 className="text-2xl font-bold text-neutralDGrey mb-2 px-2">{service.title}</h4>
                                <p className="text-sm text-neutralGrey">{service.descrition}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
}
export default Services;