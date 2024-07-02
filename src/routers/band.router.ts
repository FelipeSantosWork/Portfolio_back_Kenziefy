import { Router } from "express";
import { bandController, musicianController } from "../controllers";
import { ensure } from "../middlewares";
import { bandCreateSchema } from "../schemas";

export const bandRouter = Router();
// const bandController = new BandController();



bandRouter.get("", bandController.list);
bandRouter.get("/:bandId", bandController.listByBandId);
bandRouter.post("", ensure.bodyIsValid(bandCreateSchema), bandController.create);

bandRouter.post("/:bandId/musicians", musicianController.create);
bandRouter.get("/:bandId/musicians", musicianController.list);
