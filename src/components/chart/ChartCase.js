import React, { useEffect, useState } from 'react'
import { fetchDataKasusHarian } from '../API'
import Charts from 'react-apexcharts'


export const ChartCase = () => {
    const [dataKasus, setDataKasus] = useState([])
    
    const FetchsAPI = async () => {
        setDataKasus(await fetchDataKasusHarian())
    }

    useEffect(() => {
        FetchsAPI()
        
        // console.log(dataKasus)
    }, [])

    const seriesPositif = [{
        name: "Kasus Positif",
        data: dataKasus.map(({positif}) => positif),
        color: "rgba(252, 165, 165)"
    }]

    const seriesSembuh = [{
        name: "Sembuh",
        data: dataKasus.map(({sembuh}) => sembuh),
        color: "rgba(110, 231, 183)"
    }]

    const seriesMeninggal = [{
        name: "Kasus Meninggal",
        data: dataKasus.map(({meninggal}) => meninggal),
        color: "rgba(209, 213, 219)"
    }]

    const seriesDirawat = [{
        name: "Kasus Aktif",
        data: dataKasus.map(({kasusAktif}) => kasusAktif),
        color: "rgba(252, 211, 77)"
    }]

    const grafikKasusPositif = dataKasus.length ? (
        <Charts
            options={{
                chart: {
                    type: 'area',
                    zoom: {
                        enabled: false
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    curve: 'straight'
                },
                title: {
                    text: "Data Kasus Positif",
                    align: "center"
                },
                subtitle: {
                    text: "Data kasus positif harian COVID-19 di Indonesia",
                    align: "center"
                },
                labels: dataKasus.map(({tanggal}) => tanggal),
                xaxis: {
                    type: 'datetime'
                },
                yaxis: {
                    opposite: true
                },
                legend: {
                    horizontalAlign: 'left'
                },
            }}
            series={seriesPositif}
        />
    ) : <h2 className="text-gray-500 text-lg">Loading...</h2>
    
    const grafikKasusSembuh = dataKasus.length ? (
        <Charts
        options={{
            chart: {
                type: 'area',
                zoom: {
                    enabled: false
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: 'straight'
            },
            title: {
                text: "Data Sembuh",
                align: "center"
            },
            subtitle: {
                text: "Data Sembuh harian COVID-19 di Indonesia",
                align: "center"
            },
            labels: dataKasus.map(({tanggal}) => tanggal),
            xaxis: {
                type: 'datetime'
            },
            yaxis: {
                opposite: true
            },
            legend: {
                horizontalAlign: 'left'
            },
        }}
        series={seriesSembuh}
        />
    ) : <h2 className="text-gray-500 text-lg">Loading...</h2>

    const grafikKasusMeninggal = dataKasus.length ? (
        <Charts
        options={{
            chart: {
                type: 'area',
                zoom: {
                    enabled: false
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: 'straight'
            },
            title: {
                text: "Data Kasus Meninggal",
                align: "center"
            },
            subtitle: {
                text: "Data kasus meninggal harian COVID-19 di Indonesia",
                align: "center"
            },
            labels: dataKasus.map(({tanggal}) => tanggal),
            xaxis: {
                type: 'datetime'
            },
            yaxis: {
                opposite: true
            },
            legend: {
                horizontalAlign: 'left'
            },
        }}
        series={seriesMeninggal}
        />
    ) : <h2 className="text-gray-500 text-lg">Loading...</h2>

    const grafikKasusAktif = dataKasus.length ? (
        <Charts
        options={{
            chart: {
                type: 'area',
                zoom: {
                    enabled: false
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                curve: 'straight'
            },
            title: {
                text: "Data Kasus Aktif",
                align: "center"
            },
            subtitle: {
                text: "Data kasus aktif harian COVID-19 di Indonesia",
                align: "center"
            },
            labels: dataKasus.map(({tanggal}) => tanggal),
            xaxis: {
                type: 'datetime'
            },
            yaxis: {
                opposite: true
            },
            legend: {
                horizontalAlign: 'left'
            },
        }}
        series={seriesDirawat}
        />
    ) : <h2 className="text-gray-500 text-lg">Loading...</h2>

    return (
        <div className="p-5 shadow-md rounded-md bg-gray-100">
            <div className="container flex flex-col justify-center content-center">
                <h1 className="text-2xl text-gray-500 font-bold">Statistik Kasus COVID-19</h1>
                <div>{grafikKasusPositif}</div>
                <br />
                <div>{grafikKasusSembuh}</div>
                <br />
                <div>{grafikKasusMeninggal}</div>
                <br />
                <div>{grafikKasusAktif}</div>
            </div>
        </div>
    )
}
