import { Connection, Repository, getConnection } from 'typeorm';

import { MediaType } from '../entities';
import { MediaTypeService } from '../interfaces';

export class SqliteMediaTypeService implements MediaTypeService {
    private readonly repository: Repository<MediaType>;

    constructor(connection: Connection = getConnection()) {
        this.repository = connection.getRepository(MediaType);
    }

    public getMediaTypes = async (): Promise<MediaType[]> => {
        return this.repository.find();
    };

    public getMediaType = async (mediaTypeId: number): Promise<MediaType | undefined> => {
        return this.repository.findOne({ 'id': mediaTypeId });
    };
}