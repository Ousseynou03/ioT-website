import React from 'react';

const Blog = ()=>{
    const blogs = [
        {
            id: 1, 
            title: "Commandes intuitives", 
            descrition: "Pilotez vos appareils d'un simple geste ou avec votre voix grâce à des interfaces intuitives et des assistants vocaux comme Alexa ou Google Assistant. Réveillez-vous avec des lumières douces, une température idéale et vos volets qui s’ouvrent automatiquement.", 
            image:"/src/assets/Icons/bell.png"
        }, 
        {
            id: 2, 
            title: "Un confort personnalisé", 
            descrition: "Adaptez vos espaces à vos besoins en programmant vos préférences. Température réglée selon les saisons. Éclairage ajusté en fonction de votre activité. Musique ou ambiance sonore pour un moment de détente parfait.", 
            image:"/src/assets/Icons/cctv-camera.png"
        },
        {
            id: 3, 
            title: "Un environnement qui anticipe vos besoins", 
            descrition: "Grâce à l’Internet des Objets, votre espace de vie devient plus qu’un lieu : il se transforme en un allié intelligent qui répond à vos attentes. Chauffage intelligent : profitez d’une température parfaite à tout moment, sans gaspillage d’énergie.", 
            image:"/src/assets/Icons/teamwork.png"
        }
    ]
    return(
        <div className='px-4 text-center lg:px-14 max-w-screen-2xl mx-auto my-12' id='confort'>
            <div className='text-center flex md:w-1/2 mx-auto flex-col items-center'>
                <h2 className='text-4xl text-center text-neutralDGrey font-semibold mb-4 md:w-4/5'>
                Une maison qui s&lsquo;adapte à vous
                </h2>
                <p className='text-sm text-neutralGrey mb-8 md:w-3/4 mx-auto'>
                Imaginez un espace de vie où tout fonctionne à votre convenance, sans effort. Grâce à nos solutions IoT, vos appareils connectés s&lsquo;harmonisent pour offrir un environnement optimal, que ce soit pour travailler, se détendre ou recevoir des invités.
                </p>
            </div>
            {/** all blogs*/}
            <div className='grid lg:grid-cols-3 sm:grid-col-2 grid-cols-1 gap-10 items-center justify-between'>
            {
            blogs.map(service => 
                        <div key={service.id} className="px-4 py-8 text-center md:w-[350px]
                        mx-auto md:h-80 rounded-md  shadow cursor-pointer flex items-center justify-center
                        h-full ">
                            <div>
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

export default Blog;