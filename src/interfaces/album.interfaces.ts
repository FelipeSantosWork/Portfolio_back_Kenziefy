import { z } from 'zod';
import { albumSchema, albumCreateSchema } from '../schemas';

type Album = z.infer<typeof albumSchema>;
type AlbumCreate = z.infer<typeof albumCreateSchema>;


export { Album, AlbumCreate };