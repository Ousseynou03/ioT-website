import React from 'react';
import { Carousel } from "flowbite-react";
import banner1 from "../assets/iot_illustration.jpg";

const Home= () =>{
    return (
        <div className='bg-neutralSilver'>
            <div className='px-4 lg:px-14 max-w-screen-2x1 mx-auto min-h-screen h-screen'>
                <Carousel className='w-full mx-auto'>
                    <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center h-full justify-between 
                    gap-12">
                        <div>
                            <img src={banner1} alt=''/>
                        </div>
                        {/* hero text */}
                        <div className='md:w-1/2'>
                            <h1 className='text-5x1 font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>Lessons and insights 
                            <span className='text-brandPrimary leading-snug'> from 8 years</span></h1>
                            <p className='text-neutralGrey text-base mb-8'> Where to grow your business as a photographer : 
                                site or social media?
                            </p>
                            <button className='btn-primary'>Contact us</button>
                        </div>
                    </div>
                    <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center h-full justify-between 
                    gap-12">
                        <div>
                            <img src={banner1} alt=''/>
                        </div>
                        {/* hero text */}
                        <div className='md:w-1/2'>
                            <h1 className='text-5x1 font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>Learn an Earn 
                            <span className='text-brandPrimary leading-snug'> in 4 Mounth</span></h1>
                            <p className='text-neutralGrey text-base mb-8'> Where to grow your business as a photographer : 
                                site or social media?
                            </p>
                            <button className='btn-primary'>Contact us</button>
                        </div>
                    </div>
                    <div className="flex h-full items-center justify-center">
                    Slide 3
                    </div>
                </Carousel>
            </div>
        </div>
    );
}

export default Home;