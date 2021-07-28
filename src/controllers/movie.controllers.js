exports.createMovie = (req, res) =>{
    try {
        const movie = {
            title: req.body.title,
            watched: true, 
            user: req.body.user,
            token: req.headers.authorization
        }
        res.status(200).send({movie, movie: movie, message: "Movie Sucessfully created"})
        
    } catch (error) {
        res.status(500).send({message: "No Movie Created"})
    }
    }