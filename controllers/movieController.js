
//INDEX
const index = (req, res) => {
    res.json({
        data: "tutti gli elementi"
    })
};

//SHOW
const show = (req, res) => {
    const movieId = req.params.id;
        res.json({
        data: `un solo elemento elementi con id ${movieId}`
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