import { Arg, Query, Resolver } from 'type-graphql';

import { Artist } from '../entities';
import { ArtistRepository } from '../repositories';

@Resolver(Artist)
export class ArtistResolver {
    private artistRepository: ArtistRepository;

    constructor(artistRepository: ArtistRepository = new ArtistRepository()) {
        this.artistRepository = artistRepository;
    }

    @Query(returns => Artist)
    async artist(@Arg('artistId') artistId: number) {
        return this.artistRepository.getArtist(artistId);
    }
}