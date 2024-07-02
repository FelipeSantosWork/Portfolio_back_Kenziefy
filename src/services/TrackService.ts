import { prisma } from "../database";
import { Track, TrackCreate, TrackRetrieve } from "../interfaces";
import { trackRetrieveSchema, trackSchema } from "../schemas";

export class TrackService {
    private track = prisma.track;

    public list = async (): Promise<Array<Track>> => {
        const tracks = await this.track.findMany();

        return trackSchema.array().parse(tracks);
    };

    public listByAlbumId = async (albumId: number): Promise<Array<Track>> => {
        const albumTracks = await this.track.findMany({ where: { albumId: albumId }, });
        return trackSchema.array().parse(albumTracks);
    };

    public create = async (payLoad: TrackCreate): Promise<Track> => {
        const newTrack = await prisma.track.create({ data: payLoad });

        return trackSchema.parse(newTrack);
    };

    public retrieve = async (trackId: number): Promise<TrackRetrieve> => {
        const track = await this.track.findUnique({ where: { id: trackId }, include: { album: true } });

        return trackRetrieveSchema.parse(track);
    };

}