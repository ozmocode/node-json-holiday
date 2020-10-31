const axios = require('axios')

async function fetchData() {
    let res = await axios.get('https://cdn.jsdelivr.net/gh/niyoko/libur-nasional/data/2020.json')
    let data = res.data
    console.log(data)
}

fetchData()