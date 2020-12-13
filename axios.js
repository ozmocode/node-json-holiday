const axios = require('axios')
const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        console.log('hit')
        let data = []
        async function fetchData() {
            let res = await axios.get('https://cdn.jsdelivr.net/gh/niyoko/libur-nasional/data/2020.json')
            data = res.data
            console.log(data)
        }
        fetchData()
        res.write(JSON.stringify(data))
        res.end()
    }
})
server.listen(5000)