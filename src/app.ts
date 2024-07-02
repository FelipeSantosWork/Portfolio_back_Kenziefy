import express from "express";
import { albumRouter, bandRouter, trackRouter } from "./routers";
import { handleErrors } from "./middlewares";

const app = express();
app.use(express.json());

app.use('/api/bands', bandRouter);
app.use('/api/albums', albumRouter);
app.use('/api/tracks', trackRouter);

app.use(handleErrors);

export default app;