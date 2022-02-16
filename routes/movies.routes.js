// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

// all your routes here

const Movie = require("../models/Movie.model")
const Celebrity = require("../models/Celebrity.model")

router.route("/create")
    .get((req, res) => {
        Celebrity.find()

            .then(celebs => res.render("movies/new-movie", { celebs }))
    })


    .post((req, res) => {

        const { title, genre, plot, cast } = req.body;
        Movie.create({ title, genre, plot, cast })
            .then(() => res.redirect("/movies"))
    })



router.route("/:id/delete")
.post((req,res)=>{
    Movie.findByIdAndRemove(req.params.id)
    .then(()=> res.redirect("/movies"))
    .catch(console.log)
})

/**
 * Create the /movies/:id/edit GET route in routes/movies.routes.js.
In that route:
Call the Movie model’s findOne() or findById() method to retrieve a specific movie by its id
Call the Celebrity model's find() to retrieve all celebrities for the cast.
If everything is good, render the movies/edit-movie view
Pass the variable with the movie's details and all celebrities into the view
 */


router.route("/:id/edit")
.get((req,res)=>{
    let movie = "";

    Movie.findById(req.params.id)
    .then((response)=>{
        movie = response
        Celebrity.find()
        .then((celebs)=> res.render("movies/edit-movie", {movie, celebs}))
        
    })
})
.post((req, res)=>{

    const {title, genre, plot, cast} = req.body;

    console.log(req.params.id)
    Movie.findByIdAndUpdate(req.params.id,{title, genre, plot, cast})
    .then(()=>res.redirect(`/movies/${req.params.id}`))
    .catch(error=>console.log(error))
    /**
     * In that route:
Create an object with movie's model keys and it's values should come from the form submission (which is req.body)
Now you can apply different methods - update() or findByIdAndUpdate() to find the movie and send the updated values to the database.
If there is no error, redirect back to the movie details page.
     */



})



router.route("/:id")
    .get((req, res) => {

        Movie.findById(req.params.id)
            .populate("cast")
            .then(movie => res.render("movies/movie-details", movie))
    })
router.route("/")
    .get((req, res) => {
        Movie.find()
            .then(movies => {
                res.render("movies/movies", { movies })
            })
    })


module.exports = router;