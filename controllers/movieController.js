import connection from "../db.js";

//INDEX
const index = (req, res) => {
    const sql = `
        SELECT * 
        FROM movies;
    `

    connection.query(sql, (err, results) => {
        if(err) {
            console.log("errore");   
        } else {
            
            res.json({
                data: results,
                count: results.length
            });
        }
    })
};

//SHOW
const show = (req, res) => {
    const id = req.params.id;

    const sql = `
        SELECT * 
        FROM movies 
        WHERE id = ?;
    `

    connection.query(sql, [id], (err, results) => {
        if(err) {
            console.log("errore");
            
        } else {
            if(results.lenght === 0) {
                res.status(404).json({
                    error: "post non trovato"
                });
            } else {
                res.status(200).json({
                    data: results[0]
                });
            }
        } 
    })
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