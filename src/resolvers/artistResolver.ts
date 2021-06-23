import { Arg, FieldResolver, Query, Resolver, Root } from 'type-graphql';
import { Connection, Repository, getConnection } from 'typeorm';

import { Album, Artist } from '../entities';

@Resolver(Artist)
export class ArtistResolver {
    private artistRepository: Repository<Artist>;
    private albumRepository: Repository<Album>;

    constructor(connection: Connection = getConnection()) {
        this.artistRepository = connection.getRepository(Artist);
        this.albumRepository = connection.getRepository(Album);
    }

    @Query(returns => Artist)
    async artist(@Arg('artistId') artistId: number): Promise<Artist|undefined> {
        return this.artistRepository.findOne({ id: artistId });
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