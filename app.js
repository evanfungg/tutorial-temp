const http = require("http")

const server = http.createServer((req, res) => {
    res.write("This is the main page")
    res.end()

})

