import React, { useEffect, useState } from "react";
import {BsFilterLeft} from 'react-icons/bs'
import Filter from "./Filter";

const Navbar = ({ridesData, setFiltered, active, setActive}) => {
  const [showFilterModal, setShowFilterModal] = useState(false)
  const [statename, setStatename] = useState('')
  const [cityname, setCityname] = useState('')

 
  useEffect(() => {

    if (active === 'nearestRides') {
      
      const filteredResults = ridesData.sort((a,b) => {
        new Date(a.date).getTime() >= new Date(b.date).getTime()
      })
      setFiltered(filteredResults)
      
      return
    }

    if (active === 'upcomingRides') {
      const filteredResults = ridesData.sort((a,b) => (
        new Date(a.date).getTime() - new Date(b.date).getTime()
      )).reverse()
      setFiltered(filteredResults)
      return
    }

    if (active === 'pastRides') {
      const filteredResults = ridesData.sort((a,b) => (
        new Date(a.date).getTime() - new Date(b.date).getTime()
      ))
      setFiltered(filteredResults)
      return
    }

    if(active === 'state') {
      const filteredResults = ridesData.filter(((item) => (
        item.state.toLowerCase().includes(statename.toLowerCase())
      )))
      setFiltered(filteredResults)
      return
    }

    if(active === 'city') {
      const filteredResults = ridesData.filter(((item) => (
        item.city.toLowerCase().includes(cityname.toLowerCase())
      )))
      setFiltered(filteredResults)
      return
    }

  })

  return (
    <div className="bg-zinc-800 py-4 px-14 flex flex-row justify-between items-center">
      <div className="filter-con flex gap-6 ">
            <button onClick={() => setActive('nearestRides')} className='text-gray-500 text-lg focus:text-white focus:underline focus:decoration-white focus:underline-offset-2'>Nearest Rides</button>
            <button onClick={() => setActive('upcomingRides')} className='text-gray-500 text-lg focus:text-white focus:underline focus:decoration-white focus:underline-offset-2'>Upcoming Rides</button>
            <button onClick={() => setActive('pastRides')} className='text-gray-500 text-lg focus:text-white focus:underline focus:decoration-white focus:underline-offset-2'>Past Rides</button>
      </div>

      <div className= "">
       { !showFilterModal &&
        <div className="flex justify-center items-center gap-1 text-white" onClick={() => setShowFilterModal(!showFilterModal)} >
          <BsFilterLeft className="w-7 h-6"/>
          <h1 className='text-lg'>Filters</h1>
       </div>
       }

        {showFilterModal &&  <Filter setShowFilterModal={setShowFilterModal} ridesData={ridesData} statename={statename} cityname={cityname}  setStatename={setStatename} setCityname={setCityname} setActive={setActive}  />}
        
      </div>


    </div>
  );
};

export default Navbar;


