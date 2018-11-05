const express = require('express')
const mustacheExpress = require('mustache-express')
const app = express()
const port = 3000
var bodyParser = require('body-parser')

let trips = []

app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', function(req, res) {
    
    res.render('index', {trips : trips})
    
})

app.post('/add-trip', function (req, res) {

    let trip = req.body
    console.log(trip)

   trips.push(trip)
   res.redirect('/')
   


})

app.post('/delete-trip', function (req, res) {
    
    let tripToDelete = req.body
    console.log(tripToDelete)

    trips = trips.filter(function (trip) {
        console.log(trip.tripName)
        return trip.tripName != tripToDelete.tripName
    })

    res.redirect('/')

    // assuming that the trip has been deleted..

    // this is when you want to go to a different confirmation page
    //res.render("trip-deleted",{tripName : name})


})

app.listen(port, function(){

 console.log(`Server Running...`)
})