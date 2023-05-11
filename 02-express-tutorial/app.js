const http = require('http')
const {readFileSync, read} = require('fs')

const homePage = readFileSync('./navbar-app/index.html')
const homeStyles = readFileSync('./navbar-app/styles.css')
const homeLogic = readFileSync('./navbar-app/browser-app.js')
const logo = readFileSync('./navbar-app/logo.svg')
const server = http.createServer((req, res) => {
    // console.log(req.method) 
    //console.log(req.url) 
    const url = req.url;
    if(url === '/'){
        console.log(url)

        res.writeHead(200, {'content-type': 'text/html'})
        res.write(homePage)
        res.end()
    }
    else if(url === '/styles.css'){
        console.log(url)

        res.writeHead(200, {'content-type': 'text/css'})
        res.write(homeStyles)
        res.end()
    }
    else if(url === '/logo.svg'){
        console.log(url)

        res.writeHead(200, {'content-type': 'image/svg+xml'})
        res.write(logo)
        res.end()
    }
    else if (url === '/browser-app.js'){
        res.writeHead(200, {'content-type':'text/javascript'})
        res.write(homeLogic)
        res.end()
    }
    else if (url === '/about'){
        res.writeHead(200, {'content-type':'text/html'})
        res.write('<h1>About Wonderland</h1>')
        res.end()
    }
    else{
        res.writeHead(404, {'content-type': 'text/html'})
        res.write('<h1>oops! no page found...</h1>')
        res.end()
    }
    
}).listen(5000)