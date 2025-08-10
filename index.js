import express from 'express'
import users from './user.js'

const app = express()

app.get('/', (req, res) => {
    res.send('Server is ready')
})

// FIXED this line
app.get('/api/user', (req, res) => {
    res.send(users)
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`)
})
