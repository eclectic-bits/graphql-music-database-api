import { Track } from '../entities';

export interface TrackService {
    getTrack(trackId: number): Promise<Track|undefined>;

    getTracksByAlbumId(albumId: number): Promise<Track[]>;
}