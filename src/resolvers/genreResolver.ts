import { Arg, Query, Resolver } from 'type-graphql';

import { Genre } from '../entities';
import { GenreService } from '../interfaces';
import { SqliteGenreService } from '../services';

@Resolver(Genre)
export class GenreResolver {
    constructor(private genreService: GenreService = new SqliteGenreService()) { }

    @Query(returns => Genre)
    public async genre(@Arg('genreId') genreId: number): Promise<Genre|undefined> {
        return this.genreService.getGenre(genreId);
    }

    @Query(returns => [ Genre ])
    public async genres(): Promise<Genre[]> {
        return this.genreService.getGenres();
    }
}