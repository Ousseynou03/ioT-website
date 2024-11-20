import React from "react";

const Newsletter = () =>{
    return(
        <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16" id="confort">
            <div className="flex items-center justify-center lg:w-2/5 mx-auto">
                <div className="text-center">
                <h1 className='lg:text-5x1 text-3x1 text-neutral-800 font-semibold mb-6 lg:leading-snug'>
                    Spotify - Web Player Music for everyone
                </h1>
                <div className="flex items-center justify-center gap-8 ">
                    <button className="btn-primary text-white">get a Demo</button>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Newsletter;