import React from 'react'
import {GitHub } from '@material-ui/icons'

export const About = () => {
    const Year = new Date().getFullYear()
    return (
        <div className="flex flex-col py-4">
            <div className="p-6 text-2xl">More Info: <a className="text-blue-700 hover:underline" href="https://covid19.go.id/">Covid-19 Indonesia</a></div>
            <div className="text-xl">Create by Andhika @ {Year}</div>
            <div className="flex flex-row justify-center justify-items-center text-center">
                <a className="p-3 cursor-pointer" href="https://github.com/andhika-d-s">
                    <GitHub fontSize="large" />
                </a>
            </div>
            <div>Icons made by <a className="text-blue-700 hover:underline" href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a className="text-blue-700 hover:underline" href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            <div>data provide by <a href="https://github.com/Reynadi531/api-covid19-indonesia-v2" className="text-blue-700 hover:underline">Reynadi531</a></div>
        </div>
    )
}
