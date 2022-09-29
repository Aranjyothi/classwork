const Vegetable = require('../models/vegetable');

// Bring in our seed data
const seed = require('../models/seed')



// ROUTE    GET /fruits     (index
const findAllVegetable = (req, res) => {  
    // Find takes two arguments:
    //   1st: an object with our query (to filter our data and find exactly what we need)
    //   2nd: callback (with an error object and the found data)
     Vegetable.find({}, (err, foundVegetable) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('Vegetable/Index', { vegetables: foundVegetable})
        }
    })
}

// ROUTE      GET /meat/new    (new)
const showNewView = (req, res) => {     
    // res.send('<form>Create Meat</form>')
    res.render('Vegetable/New')
}

// ROUTE     POST /Meats     (create)
const createNewVegetable = (req, res) => {
      // Create has two arguments:
    //   1st: the data we want to send
    //   2nd: callback function 
    Vegetable.create(req.body, (err, createdVegetable) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/vegetables')
        }
    })
}


// ROUTE       GET /Meats/seed      (seed)
const seedStarterData = (req, res) => {
    // Delete all remaining documents (if there are any)
    Vegetable.deleteMany({}, (err, deletedVegetable) => {
        if (err) {
            res.status(400).json(err)
        } else {
            console.log('deleted data.')
            // console.log(seed.Meat)
            // Data has been successfully deleted
            // Now use seed data to repopulate the database
            Vegetable.create(seed.vegetables, (err, createdVegetable) => {
                if (err) {
                    res.status(400).json(err)
                } else {
                    res.status(200).redirect('/vegetables')
                }
            })
        }
    })
}

// ROUTE     GET /Meats/:id     (show)
const showOneVegetable = (req, res) => {
    // findById accepts two arguments:
    //   1st: the id of the document in our database
    //   2nd: callback (with error object and found document)
    Vegetable.findById(req.params.id, (err, foundVegetable) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('Vegetable/Show', { vegetable: foundVegetable})
        }
    })
}


// ROUTE      GET /Meats/:id/edit     (edit)
const showEditView = (req, res) => {
    Vegetable.findById(req.params.id, (err, foundVegetable) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).render('Vegetable/Edit', { vegetable: foundVegetable })
        }
    })
}

// ROUTE     PUT /Meats/:id       (update)
const updateOneVegetable = (req, res) => {

    if (req.body.readyToEat === "on") {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }

    // findByIdAndUpdate takes 4 arguments:
    //    1st: the id 
    //    2nd: new data we want to use to update the old document
    //    3rd (optional): an options object, which looks like this:  { new: true }
    //    4th: callback (with error object and foundMeat or updatedMeat)
    Vegetable.findByIdAndUpdate(req.params.id, req.body, (err, foundVegetable) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect(`/vegetable/${req.params.id}`)
        }
    })
}


// ROUTE       DELETE /Meats/:id      (destroy)
const deleteOneVegetable = (req, res) => {
    // console.log('in delete route')
    // res.send('Deleting a Meat at index! (in DB)')
    
    Vegetable.findByIdAndDelete(req.params.id, (err, deletedVegetable) => {
        if (err) {
            res.status(400).json(err)
        } else {
            res.status(200).redirect('/vegetables')
        }
    })
}

module.exports = {
    findAllVegetable,
    showNewView, 
    createNewVegetable,
    seedStarterData,
    showOneVegetable,
    showEditView,
    updateOneVegetable,
    deleteOneVegetable
}