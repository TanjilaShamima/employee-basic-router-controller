const express = require('express')
const employeeRouter = require('./employeeRouter')
const app = express()

const PORT = process.env.PORT || 8080

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use('/employees', employeeRouter)

app.get('/', (req, res) => {
    res.send('<h1>This is Homepage</h1>')
})

app.get('*', (req, res) => {
    res.send('<h1>404 !! Not Found !!!</h1>')
})


app.listen(PORT, () => {
    console.log("Listening port.. ", PORT)
})