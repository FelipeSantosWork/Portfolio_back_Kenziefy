import { Router } from "express";
import { ensure, ensureAlbum, ensureBand } from "../middlewares";
import { albumController, trackController } from "../controllers";
import { albumCreateSchema, trackCreateSchema } from "../schemas";

export const albumRouter = Router();
// const albumController = new AlbumController();

albumRouter.get("", albumController.list);
albumRouter.get("/:albumId", albumController.listByAlbumId);

albumRouter.post("", ensure.bodyIsValid(albumCreateSchema), ensureBand.idExists, albumController.create);

albumRouter.use("/:albumId/tracks", ensureAlbum.idExists);

albumRouter.get("/:albumId/tracks", trackController.listByAlbumId);
albumRouter.post("/:albumId/tracks", ensure.bodyIsValid(trackCreateSchema), trackController.create);
