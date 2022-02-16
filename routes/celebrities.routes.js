// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

// all your routes here

const Celebrity = require("../models/Celebrity.model")

router.route("/create")
.get((req,res)=> res.render("celebrities/new-celebrity"))
.post((req,res)=>{
    const {name, occupation, catchPhrase } = req.body;
    Celebrity.create({name,occupation,catchPhrase})
    .then(()=> res.redirect("/celebrities"))
    .catch(error=>{
        console.log(error)
        res.render("celebrities/new-celebrity")
    })
})


router.route("/")
.get((req,res)=>{

    Celebrity.find()
    .then(celebs=> res.render("celebrities/celebrities", {celebs}))
    .catch(error=> console.log(error))
})

/*
In the route:
Use find() method on the Celebrity model to retrieve all the celebrities
If everything is okay, render the celebrities/celebrities.hbs view and pass the array of celebrities into the view as a variable
If there's an error, catch it





In that route we have to create an instance of the Celebrity model (don't forget, we should get all the info from the form through req.body)
If there is an error, render the celebrities/new-celebrity view so the user can try again and
If there is no error, redirect to the page with the list of celebrities. This route will be created in the next iteration /celebrities
In the views/index.hbs view file:
Add a link that goes to the page you just created with the form to create a new celebrity.
*/

module.exports = router;