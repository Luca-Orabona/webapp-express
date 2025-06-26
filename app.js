import express from "express";
import moviesRouter from "./routers/movies.js"

const app = express();
const port = 3000;


app.use(express.static("public"));
app.use(express.json());
app.use("/movies", moviesRouter);


app.listen(port, () => {
    console.log("server in ascolto");
});
