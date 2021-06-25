import { MediaType } from '../entities';

export interface MediaTypeService {
    getMediaTypes(): Promise<MediaType[]>;

    getMediaType(mediaTypeId: number): Promise<MediaType | undefined>;
}