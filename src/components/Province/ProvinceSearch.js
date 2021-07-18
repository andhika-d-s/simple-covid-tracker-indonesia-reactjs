import React, { useEffect, useState } from 'react'
import { fetchDataProvinsi, fetchDataProvinsiSearch } from '../API'
import CardsProvince from './CardsProvince'

export const ProvinceSearch = () => {
    const [fetchNamaProvinsi, setFetchNamaProvinsi] = useState([])
    const [handleChangeProvinsi, setHandleChangeProvinsi] = useState("")
    const [dataKasusProvinsi, setDataKasusProvinsi] = useState([])

    const fetchedAPI = async () => {
        return setFetchNamaProvinsi(await fetchDataProvinsiSearch())
    }

    const fetchKasusProvinsi = async (provinsi) => {
        setDataKasusProvinsi(await fetchDataProvinsi(provinsi))
        return dataKasusProvinsi
    }

    useEffect(() => {
        fetchKasusProvinsi(handleChangeProvinsi)
        fetchedAPI()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [handleChangeProvinsi])

    return (
        <div className="flex flex-col">
            <div className="text-center text-gray-600 font-bold">
                <h1 className="text-3xl">Data Kasus COVID-19 per Provinsi</h1>
            </div>
            <br />
            <select className="py-2 border-2 mx-auto rounded-md" onChange={(e) => setHandleChangeProvinsi(e.target.value)} defaultValue="DKI JAKARTA">
                {
                    fetchNamaProvinsi.map((prov, key) => (
                        <option key={key} value={prov.provinsi}>{prov.provinsi}</option>
                    ))
                }
            </select>
            <br />
            {
                dataKasusProvinsi ? !dataKasusProvinsi.length ? <span>Loading...</span> : <CardsProvince data={dataKasusProvinsi[0]} /> : null
            }
            <br />
        </div>
    )
}

