const express = require("express");
const cors = require("cors");
const server = express();

server.use(express.json());
server.use(express.static("src/public"));
server.use(cors());

server.get('/', (req, res) => {
    return res.sendFile(__dirname + "/index.html")
});

server.listen(3000, () => {
    console.log('Server is running ...')
});