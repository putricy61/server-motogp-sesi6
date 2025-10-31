var motoGP = [
    {
        circuit: 'Losail',
        location: 'Qatar',
        winner: {
            firstName: 'Andrea',
            lastName: 'Dovizioso',
            country: 'Italy'
        }
    },
    {
        circuit: 'Autodromo',
        location: 'Argentine',
        winner: {
            firstName: 'Cal',
            lastName: 'Crutchlow',
            country: 'UK'
        }
    },
    {
        circuit: 'De Jerez',
        location: 'Spain',
        winner: {
            firstName: 'Valentino',
            lastName: 'Rossi',
            country: 'Italy'
        }
    },
    {
        circuit: 'Mugello',
        location: 'Italy',
        winner: {
            firstName: 'Andrea',
            lastName: 'Dovizioso',
            country: 'Italy'
        }
    }
]

const http = require('http')
const port = 5000


const server = http.createServer((req, res)=>{
    res.writeHead(200, {'content-type': 'text/html; charset=utf-8'})
    if(req.url=='/'){
        res.write("<h1>Welcome to MotoGP</h1>")
        res.write("<pre>" +JSON.stringify(motoGP, null, 2) + "</pre>")
    }
    else if(req.url=='/country'){
        res.write("<h1>MotoGP Page by Country</h1>")
        const asal = {}
        for (let i=0; i<motoGP.length; i++){
            let country = motoGP[i].winner.country;
            if (asal[country] == undefined){
                asal[country]=[]
            }
            asal[country].push(motoGP[i])
        }
        for(let negara in asal){
            res.write(`<h1>${negara}</h1>`)
            res.write("<pre>" + JSON.stringify(asal[negara], null, 2) + "</pre>")
            res.write("<hr>")
        }
    }

    else if(req.url=='/name'){
        res.write("<h1>MotoGP Page by Name</h1>")
        const name = []
        for (let i=0; i<motoGP.length; i++){
            let fullName = motoGP[i].winner.firstName + " " + motoGP[i].winner.lastName ;
            if (name[fullName] == undefined){
                name[fullName]=[]
            }
            name[fullName].push(motoGP[i])
        }
        for(let nama in name){
            res.write(`<h2>${nama}</h2>`)
            res.write("<pre>" + JSON.stringify(name[nama], null, 2) + "</pre>")
            res.write("<hr")
        }
    }
    else{
        res.write("<h1>Bad Request</h1>")
    }
    res.end()
})

server.listen(port, ()=>{
    console.log(`Server Run at http://localhost:${port}`);
    
})



// const server = http.createServer((req, res)=>{
//     res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
//     if(req.url=='/'){
//         res.write("<h1>Welcome to My GP</h1>")
//     }
//     else if(req.url=='/motogp'){
//         res.write("MotoGP Page")
//         res.write(JSON.stringify(motoGP, null, 2))
//     }
//     else if(req.url=='/country'){
//         res.write("Informatics Student")

//         res.write("Italy")
//         const Ita = motoGP.filter(s=> s.winner.country == 'Italy')
//         res.write("<pre>" + JSON.stringify(Ita, null, 2) + "</pre>")

//         res.write("<br><br><hr><br><br>")

//         res.write("Uk")
//         const Uk = motoGP.filter(s=> s.winner.country == 'UK')
//         res.write("<pre>" + JSON.stringify(Uk, null, 2) + "</pre>")
//     }
//     else if(req.url=='/name'){
//         for (i =0; i<motoGP.length; i++){
//             res.write(i.winner.firstName)
//             const nama = i.filter(s=> s.winner.firstName)
//             res.write(JSON.stringify(nama))
//         }
//         res.write("Electrics student")
//         const nama = motoGP.filter(s=> s.winner.firstName)
//         res.write(JSON.stringify(nama))
//     }
//     else{
//         res.write("<h1>Bad Request </h1>")
//     }
//     res.end()
// })

// server.listen(port, ()=>{
//     console.log(`Server Run at http://localhost:${port}`);
    
// })


// const http = require('http')
// const port = 8000

// var motoGP = [
//     {
//         circuit: 'Losail',
//         location: 'Qatar',
//         winner: {
//             firstName: 'Andrea',
//             lastName: 'Dovizioso',
//             country: 'Italy'
//         }
//     },
//     {
//         circuit: 'Autodromo',
//         location: 'Argentine',
//         winner: {
//             firstName: 'Cal',
//             lastName: 'Crutchlow',
//             country: 'UK'
//         }
//     },
//     {
//         circuit: 'De Jerez',
//         location: 'Spain',
//         winner: {
//             firstName: 'Valentino',
//             lastName: 'Rossi',
//             country: 'Italy'
//         }
//     },
//     {
//         circuit: 'Mugello',
//         location: 'Italy',
//         winner: {
//             firstName: 'Andrea',
//             lastName: 'Dovizioso',
//             country: 'Italy'
//         }
//     }
// ]

// const server = http.createServer((req, res) => {
//     // kasih tahu browser ini HTML biar tampil rapi
//     res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })

//     // 1️⃣ tampil semua data
//     if (req.url === '/') {
//         res.write("<h1>All MotoGP Data</h1>")
//         res.write("<pre>" + JSON.stringify(motoGP, null, 2) + "</pre>")
//     }

//     // 2️⃣ tampil berdasarkan negara
//     else if (req.url === '/country') {
//         res.write("<h1>Data Berdasarkan Negara</h1>")
        
//         const countries = {}
//         motoGP.forEach(item => {
//             const country = item.winner.country
//             if (!countries[country]) countries[country] = []
//             countries[country].push(item)
//         })

//         for (let country in countries) {
//             res.write(`<h3>${country}</h3>`)
//             res.write("<pre>" + JSON.stringify(countries[country], null, 2) + "</pre>")
//             res.write("<hr>")
//         }
//     }

//     // 3️⃣ tampil berdasarkan nama pemenang
//     else if (req.url === '/name') {
//         res.write("<h1>Data Berdasarkan Nama Pemenang</h1>")

//         const names = {}
//         motoGP.forEach(item => {
//             const name = item.winner.firstName + ' ' + item.winner.lastName
//             if (!names[name]) names[name] = []
//             names[name].push(item)
//         })

//         for (let name in names) {
//             res.write(`<h3>${name}</h3>`)
//             res.write("<pre>" + JSON.stringify(names[name], null, 2) + "</pre>")
//             res.write("<hr>")
//         }
//     }

//     // 4️⃣ selain itu: bad request
//     else {
//         res.write("<h1>Bad Request</h1>")
//     }

//     res.end()
// })

// server.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`)
// })
