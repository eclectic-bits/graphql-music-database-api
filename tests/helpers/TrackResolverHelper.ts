import { TrackResolver } from '../../src/resolvers';
import { AlbumService, GenreService, MediaTypeService, TrackService } from '../../src/interfaces';

interface Options {
    trackService?: TrackService;
    albumService?: AlbumService;
    genreService?: GenreService;
    mediaTypeService?: MediaTypeService;
}

export class TrackResolverHelper {
    public static getTrackResolver = (options: Options): TrackResolver => {
        return new TrackResolver(options.trackService,
                                 options.albumService,
                                 options.genreService,
                                 options.mediaTypeService);
    };
}