import React from "react";

const Services = () =>{
    const services = [
        {
            id: 1, 
            title: "Menbership Organizations", 
            descrition: "Our menbership management software provides full automation of menbership renewals and payments", 
            image:"/src/assets/people.png"
        }, 
        {
            id: 1, 
            title: "Menbership Organizations", 
            descrition: "Our menbership management software provides full automation of menbership renewals and payments", 
            image:"/src/assets/Icons/buildings.png"
        },
        {
            id: 1, 
            title: "Menbership Organizations", 
            descrition: "Our menbership management software provides full automation of menbership renewals and payments", 
            image:"/src/assets/networking.png"
        }
    ]
    return (
        <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto">
            <div className="text-center my-8">
                <h2 className="text-4x1 text-neutralDGrey font-semibold mb-2">Our clients</h2>
                <p className="text-neutralGrey">We have been working with some Fortune 500+ clients</p>

                {/* company logo */}
                <div className="my-12 flex flex-wrap justify-between items-center gap-8">
                    <img src="/src/assets/Icons/company1.png" alt="" className="w-12"/>
                    <img src="/src/assets/Icons/company2.png" alt="" className="w-12"/>
                    <img src="/src/assets/Icons/company3.png" alt="" className="w-12"/>
                </div>
            </div>

            {/* services cards */}
            <div className="mt-20 md:w-1/2 mx-auto text-center">
            <h2 className="text-4x1 text-neutralDGrey font-semibold mb-3">Manage your entire community in a
                single system
            </h2>
            <p className="text-neutralGrey">
                Who is Nextcent suitable for?
            </p>
            </div>
        </div>
    );
}
export default Services;