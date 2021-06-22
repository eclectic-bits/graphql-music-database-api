import { Column, Entity, ManyToOne,
    OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Artist } from './artist';
import { Track } from './track';

@Entity({ name: 'albums' })
export class Album {
    @PrimaryGeneratedColumn({ name: 'albumId' })
    id: number;

    @Column({ length: 160 })
    title: string;

    @ManyToOne(() => Artist, (artist) => artist.albums)
    artist: Artist;

    @OneToMany(() => Track, (track) => track.album)
    tracks: Track[];
}