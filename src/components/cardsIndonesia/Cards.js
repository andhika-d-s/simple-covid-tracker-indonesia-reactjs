import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import CountUp from 'react-countup'
import { fetchDataKasusIndonesia } from '../API'


const Cards = () => {
    
    const [dataIndonesia, setDataIndonesia] = useState({
        data: {}
    })

    const fetchedDataIndonesia = async () => {
        const fecthedData = await fetchDataKasusIndonesia()        
        setDataIndonesia({data: fecthedData})
        // console.log(fecthedData)
    } 

    useEffect(() => {
        fetchedDataIndonesia()
    }, [])

    const card = [
        {
            id: 1,
            color: "red",
            value: dataIndonesia.data.positif,
            label: "Kasus Positif",
            date: new Date(dataIndonesia.data.lastUpdate).toDateString()
        },
        {
            id: 2,
            color: "green",
            value: dataIndonesia.data.sembuh,
            label: "Sembuh",
            date: new Date(dataIndonesia.data.lastUpdate).toDateString()
        },
        {
            id: 3,
            color: "gray",
            value: dataIndonesia.data.meninggal,
            label: "Meninggal",
            date: new Date(dataIndonesia.data.lastUpdate).toDateString()
        },
        {
            id: 4,
            color: "yellow",
            value: dataIndonesia.data.dirawat,
            label: "kasus aktif",
            date: new Date(dataIndonesia.data.lastUpdate).toDateString()
        }
    ]



    return (
        <div className="grid grid-rows-4 md:grid-rows-1 mx-2 md:grid-cols-4 gap-4 md:justify-center">
            {
                card.map(({color, label, value, id, date}) => (
                    <div key={id} className={`container rounded-md bg-${color}-300 shadow-lg`}>
                        <div className="flex flex-col p-6 px-3">
                            <div className="text-3xl font-lg">{
                            value ? 
                            <CountUp 
                                start={0}
                                end={value}
                                duration={2}
                                separator={'.'}
                            /> 
                            : <span>Loading...</span>}
                            </div> 
                            <div className="text-2xl">{label}</div>
                            <div className="flex flex-col">
                                <h3 className="text-lg">Terakhir diperbarui:</h3>
                                <p className="text-gray-500">{date}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )   
}

Cards.propTypes = {
    color: PropTypes.string,
    value: PropTypes.number,
    label: PropTypes.string,
}

export default Cards
