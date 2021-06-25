import { Connection, Repository, getConnection } from 'typeorm';

import { Genre } from '../entities';
import { GenreService } from '../interfaces';

export class SqliteGenreService implements GenreService {
    private readonly repository: Repository<Genre>;

    constructor(connection: Connection = getConnection()) {
        this.repository = connection.getRepository(Genre);
    }

    public getGenre = async (genreId: number): Promise<Genre|undefined> => {
        return this.repository.findOne({ 'id': genreId });
    }

    public getGenres = async (): Promise<Genre[]> => {
        return this.repository.find();
    }
}