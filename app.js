import express from "express";
import moviesRouter from "./routers/movies.js"
import routeNotMiddleware from "./middlewares/route-not-middleware.js";
import errorHandler from "./middlewares/error-handler-middleware.js";
import imagePath from "./middlewares/imagePath.js";

const app = express();
const port = process.env.SERVER_PORT;


app.use(express.static("public"));
app.use(express.json());
app.use("/movies", imagePath, moviesRouter);


app.use(routeNotMiddleware);
app.use(errorHandler);


app.listen(port, () => {
    console.log("server in ascolto");
});
