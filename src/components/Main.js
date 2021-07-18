import PropTypes from 'prop-types'
import Cards from './cardsIndonesia/Cards'
import React from 'react'
import { ChartCase } from './chart/ChartCase'
import { ProvinceSearch } from './Province/ProvinceSearch'
import { About } from './About'
import {ReactComponent as LogoCovid} from '../coronavirus.svg'



const Main = ({ title, subtitle }) => {

    return (
        <div className="container-xl mx-auto px-4 lg:px-28">
            <div className="flex flex-col">
                <LogoCovid className="m-6 mx-auto" width={80} height={80} />
                <div className="text-center text-gray-600 font-semibold">
                    <h1 className="text-center text-xl md:text-4xl">{title}</h1>
                    <h2 className="text-center text-lg md:text-3xl text-gray-400">{subtitle}</h2>
                </div>
                <br />
                <Cards  />
                <br /><br />
                <ChartCase />
                <br />
                <ProvinceSearch />
                <About />
            </div>
        </div>
    )
}

Main.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
}

export default Main
