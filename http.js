const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === `/`) {
        res.end('Welcome to our home page')
    }
    else if(req.url === '/about') {
        res.end('Here is our short history!')
    }
    else {
        res.end(`<h1>Oops!</h1><p>We cannot seem to find the page you are looking for!!</p><a href="/">Click link to go back to home</a>`)
    }
})

server.listen(8080)