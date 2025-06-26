import connection from "../db.js";

//INDEX
const index = (req, res) => {
    const sql = `
        SELECT * 
        FROM movies;
    `

    connection.query(sql, (err, results) => {
        if (err) {
            console.log(err);
        } else {
            const movies = results.map((curMovie) => {
                return {
                    ...curMovie,
                    image: `${req.imagePath}/${curMovie.image}`,
                };
            });

            res.json({
                data: movies,
            });
        }
    });
};

//SHOW
const show = (req, res) => {
    const id = req.params.id;

    const movieSql = `
        SELECT * 
        FROM movies 
        WHERE id = ?;
    `;

    const reviewsSql = `
        SELECT *
        FROM reviews
        WHERE reviews.movie_id = ?;
    `;

    connection.query(movieSql, [id], (err, moviesResults) => {
        if (err) {
            console.log(err);
        }

        if (moviesResults.length === 0) {
            res.status(404).json({
                error: "movie not found",
            });
        } else {
            connection.query(reviewsSql, [id], (err, reviewsResults) => {
                res.json({
                    data: {
                        ...moviesResults[0],
                        reviews: reviewsResults,
                    },
                });
            });
        }
    });
};

//STORE
const store = (req, res) => {

};

//UPDATE
const update = (req, res) => {

};

//DESTROY
const destroy = (req, res) => {

};


const movieController = {
    index,
    show,
    store,
    update,
    destroy
};

export default movieController;