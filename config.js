require('dotenv').config()
const PORT = process.env.PORT
const MAILPORT = process.env.MAILPORT
const HOST = process.env.HOST
const MAIL = process.env.MAIL
module.exports = {PORT,MAILPORT,HOST,MAIL}