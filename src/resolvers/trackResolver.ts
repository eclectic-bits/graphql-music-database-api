import { Arg, FieldResolver, Query, Resolver, ResolverInterface, Root } from 'type-graphql';

import { Album, Genre, MediaType, Track } from '../entities';
import { AlbumService, GenreService, MediaTypeService, TrackService } from '../interfaces';
import { SqliteAlbumService, SqliteGenreService, SqliteMediaTypeService, SqliteTrackService } from '../services';

@Resolver(Track)
export class TrackResolver implements ResolverInterface<Track> {
    constructor(private readonly trackService: TrackService = new SqliteTrackService(),
                private readonly albumService: AlbumService = new SqliteAlbumService(),
                private readonly genreService: GenreService = new SqliteGenreService(),
                private readonly mediaTypeService: MediaTypeService = new SqliteMediaTypeService()) { }

    @Query(returns => Track, { 'nullable': true })
    public async track(@Arg('trackId') trackId: number): Promise<Track | undefined> {
        return this.trackService.getTrack(trackId);
    }

    @Query(returns => [ Track ])
    public async tracks(@Arg('albumId') albumId: number): Promise<Track[]> {
        return this.trackService.getTracksByAlbumId(albumId);
    }

    @FieldResolver()
    public async album(@Root() track: Track): Promise<Album> {
        const album = await this.albumService.getAlbum(track.albumId);
        if (album === undefined) {
            throw new Error(`An album wasn't associated with trackId: ${ track.id }`);
        }

        return album;
    }

    @FieldResolver()
    public async genre(@Root() track: Track): Promise<Genre> {
        const genre = await this.genreService.getGenre(track.genreId);
        if (genre === undefined) {
            throw new Error(`A genre wasn't associated with trackId: ${ track.id }`);
        }

        return genre;
    }

    @FieldResolver()
    public async mediaType(@Root() track: Track): Promise<MediaType> {
        const mediaType = await this.mediaTypeService.getMediaType(track.mediaTypeId);
        if (mediaType === undefined) {
            throw new Error(`A media type wasn't associated with trackId: ${ track.id }`);
        }

        return mediaType;
    }
}