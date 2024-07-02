import { prisma } from "../database";
import { Band, BandCreate } from "../interfaces";
import { bandSchema } from "../schemas";

export class BandService {
    private band = prisma.band;

    public list = async (): Promise<Array<Band>> => {
        return await prisma.band.findMany();
    };
    public listByBandId = async (id: number): Promise<Array<Band>> => {
        const band = await this.band.findMany({ where: { id: id }, });
        return bandSchema.array().parse(band);
    };

    public create = async (payLoad: BandCreate): Promise<Band> => {
        const newBand = await prisma.band.create({ data: payLoad });

        return bandSchema.parse(newBand);
    };

}