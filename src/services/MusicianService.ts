import { prisma } from "../database";
import { Musician, MusicianPayload } from "../interfaces";
import { musicianSchema } from "../schemas";

export class MusicianService {
    private musician = prisma.musician;

    public list = async (bandId: number): Promise<Array<Musician>> => {
        return await this.musician.findMany({
            where: {
                groupMembers: {
                    some: {
                        bandId
                    }
                }
            }
        });
    };

    public create = async (payLoad: MusicianPayload): Promise<Musician> => {
        const newMusician = await this.musician.create({
            data: {
                firstName: payLoad.firstName,
                lastName: payLoad.lastName,
                groupMembers: {
                    create: {
                        joined: payLoad.joined,
                        band: {
                            connect: {
                                id: payLoad.bandId,
                            },
                        }
                    }
                }
            }
        });

        return musicianSchema.parse(newMusician);
    };

}