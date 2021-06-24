import { Arg, FieldResolver, Query,
    Resolver, ResolverInterface, Root } from 'type-graphql';
import { Service } from 'typedi';
import { Connection, Repository } from 'typeorm';

import { Album, Artist } from '../entities';
import { ArtistService } from '../interfaces';

@Service()
@Resolver(Artist)
export class ArtistResolver implements ResolverInterface<Artist> {
    private artistRepository: Repository<Artist>;
    private albumRepository: Repository<Album>;

    private artistService: ArtistService;

    constructor(connection: Connection,
        artistService: ArtistService) {
        this.artistRepository = connection.getRepository(Artist);
        this.albumRepository = connection.getRepository(Album);

        this.artistService = artistService;
    }

    @Query(returns => Artist)
    async artist(@Arg('artistId') artistId: number): Promise<Artist|undefined> {
        return this.artistService.getArtist(artistId);
    }

    @Query(returns => [ Artist ])
    async artists(): Promise<Artist[]> {
        return this.artistRepository.find();
    }

    @FieldResolver()
    async albums(@Root() artist: Artist): Promise<Album[]> {
        return this.albumRepository.find({ artistId: artist.id });
    }
}