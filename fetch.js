let response = await fetch('https://cdn.jsdelivr.net/gh/niyoko/libur-nasional/data/2020.json')

if (response.ok) {
    let json = await response.json()
} else {
    alert('HTTP-Error')
}