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
