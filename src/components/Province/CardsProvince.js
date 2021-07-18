import React from 'react'
import PropTypes from 'prop-types'
import CountUp from 'react-countup'


const CardsProvince = ({data: {kasus, sembuh, dirawat, meninggal}}) => {
    const card = [
        {
            id: 1,
            color: "bg-red-300",
            value: kasus,
            label: "Kasus Positif",
        },
        {
            id: 2,
            color: "bg-green-300",
            value: sembuh,
            label: "Sembuh",
        },
        {
            id: 3,
            color: "bg-gray-300",
            value: meninggal,
            label: "Meninggal",
        },
        {
            id: 4,
            color: "bg-yellow-300",
            value: dirawat,
            label: "kasus aktif",
        }
    ]
    return (
        <div className="flex flex-col">
            <br />
            <div className="grid grid-rows-4 md:grid-rows-1 mx-2 md:grid-cols-4 gap-4 md:justify-center">
                {
                    card.map(({color, label, value, id}) => (
                        <div key={id} className={`container rounded-md ${color} shadow-lg`}>
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
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )   
}

CardsProvince.propTypes = {
    color: PropTypes.string,
    value: PropTypes.number,
    label: PropTypes.string,
}

export default CardsProvince
