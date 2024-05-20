// day la module co san dung de tao sever nodejs
const http = require('http')
const PORT = 4000
const sever = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.end(`{"message": "hello world"}`)
})

sever.listen(PORT, () => {
 console.log(`Sever is running on port ${PORT} `)
})