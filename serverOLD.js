const express = require('express')
const cors = require('cors')

const toyService = require('./services/toy-service.js')

const app = express()
const port = 3000
app.use(cors())

// Express App Configuration:
app.use(express.static('public'))
app.use(express.json())

// Toy API (CRUDL)

// LIST TOYS
app.get('/api/toy', (req, res) => {
  const filterBy = {
    name: req.query.name || '',
    inStock: req.query.inStock || '',
    label: req.query.label || '',
    sort: req.query.sort || '',
  }
  if (req.query.pageIdx) filterBy.pageIdx = +req.query.pageIdx
  console.log('filterBy', filterBy)

  toyService.query(filterBy).then((toys) => {
    console.log('toys from query', toys)
    res.send(toys)
  })
})

// READ
app.get('/api/toy/:toyId', (req, res) => {
  const { toyId } = req.params
  console.log('toyId', toyId)
  toyService.getById(toyId).then((toy) => {
    res.send(toy)
  })
})

// DELETE
app.delete('/api/toy/:toyId', (req, res) => {
  const { toyId } = req.params
  toyService
    .remove(toyId)
    .then(() => {
      res.send('Deleted')
    })
    .catch((err) => res.status(401).send(err))
})

// CREATE
app.post('/api/toy', (req, res) => {
  const toy = req.body
  toyService.save(toy).then((savedToy) => {
    console.log('Added New Toy:! ', savedToy)
    res.send(savedToy)
  })
})

// UPDATE
app.put('/api/toy', (req, res) => {
  const toy = req.body
  toyService.save(toy).then((savedToy) => {
    console.log('Toy Updated: ', savedToy)
    res.send(savedToy)
  })
})

app.listen(port, () => {
  console.log(`Server ready at http://localhost:${port}`)
})
