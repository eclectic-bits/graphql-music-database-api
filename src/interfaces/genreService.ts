import { Genre } from '../entities';

export interface GenreService {
    getGenre(genreId: number): Promise<Genre|undefined>;
}