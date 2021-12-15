const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.json())
const port = 5000

const iceCreams = [
    { id: 0, name: "nm0" },
    { id: 1, name: "nm1" },
    { id: 2, name: "nm2" },
    { id: 3, name: "nm3" },
    { id: 4, name: "nm4" },
    { id: 5, name: "nm5" },
    { id: 6, name: "nm6" },
    { id: 7, name: "nm7" },
    { id: 8, name: "nm8" }
]

let menuData = [
    {
        id: 1,
        iceCream: { id: 1, name: "ice1" },
        inStock: true,
        quantity: 20,
        price: 1.52,
        description: "some description"
    },
    {
        id: 2,
        iceCream: { id: 1, name: "ice3" },
        inStock: false,
        quantity: 30,
        price: 2.0,
        description: "some description"
    },
    {
        id: 3,
        iceCream: { id: 1, name: "ice3" },
        inStock: true,
        quantity: 22,
        price: 2.6,
        description: "some description"
    },
]

const getAvailableStock = () =>
    iceCreams.filter(iceCream => menuData.find(menuItem.iceCream.id === iceCream.id) === undefined)

app.get('/api/menu/stock-ice-creams', (req, res) => {
    res.send(getAvailableStock())
})

// icecream not found
app.get('/api/menu/stock-ice-creams/:id', (req, res) => {
    const iceCream = getAvailableStock.find(
        iceCream => iceCream.id === parseInt(req.params.id, 10)
    )
    if (iceCream) {
        res.send(iceCream)
    } else {
        res.status(404)
        res.send({ error: 'Icecream  not found' })
    }
})


app.get('/api/menu', (req, res) => {
    res.send(menuData)
})

app.post('/api/menu', (req, res) => {
    const { iceCream, ...rest } = req.body
    const newMenuItem = {
        id: menuData.reduce((prev, cur) => (cur.id > prev ? cur.id : prev), 0) + 1,
        iceCream: {
            ...iceCreams.find(item => item.id === parseInt(iceCream.id, 10)),
        },
        ...rest,
    }
    menuData.push(newMenuItem)
    res.send(newMenuItem)
})


// menu item does not exist 
app.get('/api/menu/:id', (req, res) => {
    const menuItem = menuData.find(
        item => item.id === parseInt(req.params.id, 10)
    )
    if (menuItem) {
        res.send(menuItem)
    } else {
        res.status(404)
        res.send('Menu item does not exist')
    }
})

// delete  meni item 
app.delete('/api/menu/:id', (req, res) => {
    menuData = menuData.filter(
        menuItem => menuItem.id !== parseInt(req.params.id, 10)
    )
    res.status(204)
    res.send()
})

// port listening
app.listen(port, () => console.log(`Project ICE Servre listening on port ${port}`))