import { prisma } from "../database";
import { Album, AlbumCreate } from "../interfaces";
import { albumSchema } from "../schemas";

export class AlbumService {
    private album = prisma.album;

    public list = async (): Promise<Array<Album>> => {
        return await prisma.album.findMany();
    };
    public listByAlbumId = async (id: number): Promise<Array<Album>> => {
        const album = await this.album.findMany({ where: { id: id }, });
        return albumSchema.array().parse(album);
    };

    public create = async (payLoad: AlbumCreate): Promise<Album> => {
        const newAlbum = await prisma.album.create({ data: payLoad });

        return albumSchema.parse(newAlbum);
    };

}