import { Arg, Query, Resolver } from 'type-graphql';

import { MediaType } from '../entities';
import { MediaTypeService } from '../interfaces';
import { SqliteMediaTypeService } from '../services';

@Resolver(MediaType)
export class MediaTypeResolver {
    constructor(private readonly mediaTypeService: MediaTypeService = new SqliteMediaTypeService()) {}

    @Query(returns => MediaType)
    public async mediaType(@Arg('mediaTypeId') mediaTypeId: number): Promise<MediaType | undefined> {
        return this.mediaTypeService.getMediaType(mediaTypeId);
    }

    @Query(returns => [ MediaType ])
    public async mediaTypes(): Promise<MediaType[]> {
        return this.mediaTypeService.getMediaTypes();
    }
}