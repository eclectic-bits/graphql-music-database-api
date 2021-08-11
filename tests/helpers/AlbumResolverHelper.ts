import { AlbumResolver } from '../../src/resolvers';
import { AlbumService, ArtistService, TrackService } from '../../src/interfaces';

interface Options {
    artistService?: ArtistService;
    trackService?: TrackService;
    albumService?: AlbumService;
}

export class AlbumResolverHelper {
    public static getAlbumResolver = (options: Options): AlbumResolver => {
        return new AlbumResolver(options.artistService, options.albumService, options.trackService);
    };
}