// const fs = require('fs')
// const gToys = require('../data/toy.json')
// // const PAGE_SIZE = 6

// module.exports = {
//   query,
//   getById,
//   remove,
//   save,
// }

// function query(filterBy = { name: '', pageIdx: 0, inStock: '', label: [] }) {
//   console.log('filterBy', filterBy)
//   let filteredToys = []
//   const regex = new RegExp(filterBy.name, 'i')

//   // filter by name
//   filteredToys = gToys.filter((toy) => regex.test(toy.name))

//   // if (filterBy.pageIdx !== undefined) {
//   //   const startIdx = filterBy.pageIdx * PAGE_SIZE
//   //   filteredToys = filteredToys.slice(startIdx, startIdx + PAGE_SIZE)
//   // }

//   // filter by inStock
//   if (filterBy.inStock) {
//     filteredToys = filteredToys.filter(
//       (toy) => JSON.parse(toy.inStock) === JSON.parse(filterBy.inStock)
//     )
//   }

//   // filter by labels
//   if (filterBy.label.length) {
//     filterBy.label.forEach((label) => {
//       console.log('label', label)
//       filteredToys = filteredToys.filter((toy) => toy.labels.includes(label))
//     })
//   }

//   // Sorting
//   if (filterBy.sort) {
//     if (filterBy.sort === 'time')
//       filteredToys = filteredToys.sort((t1, t2) => t1.createdAt - t2.createdAt)
//     else if (filterBy.sort === 'price')
//       filteredToys = filteredToys.sort((t1, t2) => t1.price - t2.price)
//     else if (filterBy.sort === 'name')
//       filteredToys = filteredToys.sort((t1, t2) =>
//         t1.name.toLowerCase() > t2.name.toLowerCase() ? 1 : -1
//       )
//   }

//   return Promise.resolve(filteredToys)
// }

// function getById(toyId) {
//   console.log('toyId', toyId)
//   const toy = gToys.find((toy) => toy._id === toyId)
//   return Promise.resolve(toy)
// }

// function remove(toyId) {
//   const idx = gToys.findIndex((toy) => toy._id === toyId)
//   if (idx === -1) return Promise.reject('not found!')
//   gToys.splice(idx, 1)
//   return _saveToysToFile()
// }

// function save(toy) {
//   if (toy._id) {
//     const idx = gToys.findIndex((currToy) => currToy._id === toy._id)
//     gToys[idx] = toy
//   } else {
//     toy._id = _makeId()
//     gToys.push(toy)
//   }
//   return _saveToysToFile().then(() => toy)
// }

// function _makeId(length = 5) {
//   var txt = ''
//   var possible =
//     'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
//   for (let i = 0; i < length; i++) {
//     txt += possible.charAt(Math.floor(Math.random() * possible.length))
//   }
//   return txt
// }

// function _saveToysToFile() {
//   return new Promise((resolve, reject) => {
//     fs.writeFile('data/toy.json', JSON.stringify(gToys, null, 2), (err) => {
//       if (err) return reject(err)
//       resolve()
//     })
//   })
// }
