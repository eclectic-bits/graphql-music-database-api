import { Arg, FieldResolver, Query,
    Resolver, ResolverInterface, Root } from 'type-graphql';
import { Service } from 'typedi';
import { Connection, Repository } from 'typeorm';

import { Album, Artist } from '../entities';

@Service()
@Resolver(Album)
export class AlbumResolver implements ResolverInterface<Album> {
    private artistRepository: Repository<Artist>;
    private albumRepository: Repository<Album>;

    constructor(connection: Connection) {
        this.artistRepository = connection.getRepository(Artist);
        this.albumRepository = connection.getRepository(Album);
    }

    @Query(returns => Album)
    async album(@Arg('albumId') albumId: number): Promise<Album|undefined> {
        return this.albumRepository.findOne(albumId);
    }

    @Query(returns => [ Album ])
    async albums(@Arg('artistId') artistId: number): Promise<Album[]> {
        return this.albumRepository.find({ artistId: artistId });
    }

    @FieldResolver()
    async artist(@Root() album: Album): Promise<Artist> {
        const artist = await this.artistRepository.findOne({ id: album.artistId });
        if (artist === undefined) {
            throw new Error();
        }

        return artist;
    }
}