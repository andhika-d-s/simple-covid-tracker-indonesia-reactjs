import React from 'react'
import PropTypes from 'prop-types'
import CountUp from 'react-countup'


const CardsProvince = ({data: {kasus, sembuh, dirawat, meninggal}}) => {
    const card = [
        {
            id: 1,
            color: "red",
            value: kasus,
            label: "Kasus Positif",
        },
        {
            id: 2,
            color: "green",
            value: sembuh,
            label: "Sembuh",
        },
        {
            id: 3,
            color: "gray",
            value: meninggal,
            label: "Meninggal",
        },
        {
            id: 4,
            color: "yellow",
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