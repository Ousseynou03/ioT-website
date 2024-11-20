import React from "react";

const Newsletter = () =>{
    return(
        <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16" id="devis">
            <div className="flex items-center justify-center lg:w-2/5 mx-auto">
                <div className="text-center">
                <h1 className='lg:text-5xl text-3x1 text-neutral-800 font-semibold mb-6 lg:leading-snug'>
                    Obtenir un devis
                </h1>
                <p className='text-sm text-neutralGrey mb-8 md:w-3/4 mx-auto'>
                Vous avez un projet IoT en tête ? Nous sommes là pour le concrétiser. Remplissez notre formulaire rapide pour obtenir un devis sur mesure, adapté à vos besoins spécifiques.
                </p>
                <div className="flex items-center justify-center gap-8 ">
                    <button className="btn-primary text-white">Obtenir un devis</button>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Newsletter;