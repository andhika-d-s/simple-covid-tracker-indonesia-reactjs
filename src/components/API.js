import axios from 'axios'

const url = 'https://apicovid19indonesia-v2.vercel.app/api/indonesia'

export const fetchDataKasusIndonesia = async () => {
    try {
        const { data: {positif, sembuh, dirawat, meninggal, lastUpdate}} = await axios.get(url)
        return {
            positif,
            sembuh,
            dirawat,
            meninggal,
            lastUpdate
        }

    } catch (error) {
        console.log(error)
    }
}

export const fetchDataKasusHarian = async () => {
    const urlHarian = 'https://apicovid19indonesia-v2.vercel.app/api/indonesia/harian'
    try {
        const {data} = await axios.get(urlHarian)
        const dataModifikasi = data.map(dataHarian => (
            {
                positif: dataHarian.positif,
                kasusAktif: dataHarian.dirawat,
                sembuh: dataHarian.sembuh,
                meninggal: dataHarian.meninggal,
                tanggal: dataHarian.tanggal
            }
        ))
        // console.log(dataModifikasi)
        return dataModifikasi
    } catch (error) {
       console.log(error) 
    }
}

export const fetchDataProvinsi = async (provinsi) => {
    const urlProvinsi = 'https://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi'
    try {
        const {data} = await axios.get(urlProvinsi, {params: {name: provinsi}})
        return data
    } catch (error) {
        console.log(error)
    }
}

export const fetchDataProvinsiSearch = async () => {
    const urlProvinsi = 'https://apicovid19indonesia-v2.vercel.app/api/indonesia/provinsi'
    try {
        const {data} = await axios.get(urlProvinsi)
        const dataProvinsi = data.map(datas => (
            {
                provinsi: datas.provinsi
            }
        ))
        return dataProvinsi
    } catch (error) {
        console.log(error)
    }
}