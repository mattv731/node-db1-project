const express = require("express");
const useRouter = require('./accounts/accounts-router')

const server = express();

server.use(express.json());

server.use('/api/accounts', useRouter)

server.get('/', (req, res) => {
    res.send('<h1>Hello welcome</h1>')
})

module.exports = server;
