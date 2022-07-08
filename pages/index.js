import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'


export default function Home() {

  const [ridesData, setRidesData] = useState([])
  const [filtered, setFiltered] = useState([])
  const [active, setActive] = useState('')

  

  useEffect(() => {
    fetchData()
  },[])

  const fetchData = async() => {
    const res = await fetch('https://assessment.api.vweb.app/rides')
    const data = await res.json()
    setRidesData(data)
    setFiltered(data)
    
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Ride App</title>
      </Head>
     <div className="top-0 sticky z-10 max-w-full">
      <Header />
      <Navbar ridesData={ridesData} setFiltered={setFiltered} active={active} setActive={setActive} />
     </div>
      <div className="bg-zinc-900 mx-10 py-1">
         {
          filtered.map((item, index) => (
            <div key={index} className="bg-zinc-700 rounded-lg m-5 p-5 flex justify-between  gap-6">
              <div className='flex justify-start items-center  gap-6'>
                <Image className='rounded-lg' src='/map2.png' width='250px' height='120px' objectFit='cover' alt=''/>
                <div className="text-white">
                  <p ><span className='text-gray-300'>Ride Id :</span> {item.id}</p>
                  <p><span className='text-gray-300'>Origin Station :</span> {item.origin_station_code}</p>
                  <p><span className='text-gray-300'>Station Path :</span> [ {item.station_path.join(',')} ]</p>
                  <p><span className='text-gray-300'>Date :</span> {item.date}</p>
                  <p><span className='text-gray-300'>Distance :</span> {item.destination_station_code - item.origin_station_code}</p>
                </div>
              </div>
              <div className="flex flex-row items-start gap-3 text-white mr-10 ">
                <p className='bg-black md:text-sm md:p-1 p-2 rounded-xl'>{item.city}</p>
                <p className='bg-black md:text-sm md:p-1  p-2 rounded-xl'>{item.state}</p>
              </div>
            </div>
          ))
         }
      </div>
      
    </div>
  )
}
