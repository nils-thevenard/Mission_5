
import React from "react"
import { useState, useEffect } from "react"
import logo from '../../assets/react.svg'
import banner from '../../assets/banner.jpg'
import home1 from '../../assets/home1.jpg'
import home2 from '../../assets/home2.jpg'

import data from '../../../../server/data/propertyData.json'

export const Home = () => {
    const [cities, setCities] = useState("")
    const [districst, setDistricts] = useState("")
    const [suburbs, setSuburbs] = useState("")

    const getAllEntries = async () => {
        try {
          const entries = await client.getEntries({ content_type: 'photos' });
          setPhotoItems(entries.items);
    
          // Extract unique tags from entries
          const allTags = new Set();
          entries.items.forEach((item) => {
            if (item.fields.tags) {
              item.fields.tags.forEach((tag) => {
                allTags.add(tag);
              });
            }
          });
    
          setTags(Array.from(allTags));
          setSelectedTag(null);
        } catch (error) {
          console.log(`Error fetching photos ${error}`);
        }
      };

    useEffect(() => {
        getAllEntries();
      }, []);

    return(
        <div className="flex flex-col w-full items-center">

            <div className={`flex flex-col w-full h-[20rem] md:h-[20rem] items-center justify-center`} style={{ backgroundImage: `url(${banner})`, backgroundSize: "cover" }}>

                <h2 className="text-2xl md:text-3xl font-bold text-center text-white py-6">
                        Find&nbsp;Your&nbsp;Dream Rental&nbsp;Home&nbsp;Today
                </h2>
                <h3 className="text-xl md:text-2xl font-semibold text-white py-6">
                    Where are you planning to move to?
                </h3>

                <form className="flex flex-col md:flex-row w-[70%]  items-center justify-center md:space-x-4">

                <select className="w-full md:w-1/5 bg-white border-[#a6a6a6] rounded-t-lg md:rounded-lg border-[1px] p-2"
                         id="city" name="city">
                    <option disabled selected>City</option>
                    <option>City 1</option>
                   
                </select>
                <select className="w-full md:w-1/5 bg-white border-[#a6a6a6] md:rounded-lg border-[1px] p-2"
                        id="district" name="district">
                    <option disabled selected >District</option>
                    <option>District 1</option>
                </select>
                <select className="w-full md:w-1/5 bg-white border-[#a6a6a6] rounded-b-lg md:rounded-lg border-[1px] p-2"
                        id="suburb" name="suburb">
                    <option disabled selected >Suburb</option>
                    <option>Suburb 1</option>
                </select>
                <div className="flex w-full md:w-auto h-full items-center justify-center py-2">
                    <button className="bg-[#d70707] text-white rounded-lg py-1.5 w-[80%] md:w-auto md:px-4">
                        Search
                        </button>
                    </div>
                </form>
            </div>

            <div className="bg-[#ececec] w-full flex flex-col md:flex-row items-center justify-evenly py-12  drop-shadow-lg">
                <div className="md:w-1/3 drop-shadow-lg px-8">
                    <img src={home1}
                        className="" />
                </div>
                <div className="h-full flex flex-col md:w-1/3 space-y-8 px-6 pt-4 md:pt-0 md:justify-center">
                    <h2 className="text-3xl font-bold">Our Mission</h2>
                    <p>At Metro NZ Property Management we encompass several key elements aimed at providing a comprehensive and user friendly platform for both property owners and tenants.
                        <br /><br />
                    We offer a diverse range of properties ensuring a wide selection across various locations & budgets. We ensure transparency in property details, rental prices, terms and conditions to build trust among users.<br /><br />

                    Our aim is to become the trusted partner for anyone navigating the property market, ensuring they find their dream home efficiently and with confidence. <br/>
                    All our properties are 100% compliant.</p>
                </div>
            </div>
            <div className="w-full flex flex-col md:flex-row-reverse md:flex-row items-center justify-evenly py-12">
                <div className="md:w-1/3 drop-shadow-lg px-8">
                    <img src={home2}
                        className="" />
                </div>
                <div className="h-full flex flex-col md:w-1/3 space-y-8 px-6 pt-4 md:pt-0 md:justify-center">
                    <h2 className="text-3xl font-bold">Outstanding Properties</h2>
                    <p>Our properties have exceptional features that makes a rental property highly desirable and attractive.
                        <br /><br />
                    We are dedicated to guiding tenants through every step of their rental journey, simplifying the rental process.
                    <br /><br />
                    We aim in providing expert advice and support ensuring tenants find not just a place to live, but a home that suits their needs.</p>
                </div>
            </div>

        </div>
    )
}