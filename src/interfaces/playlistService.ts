import { Playlist } from '../entities';

export interface PlaylistService {
    getPlaylist(playlistId: number): Promise<Playlist | undefined>;
}