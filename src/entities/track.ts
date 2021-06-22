import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Album } from '../entities';

@Entity({ name: 'tracks' })
export class Track {
    @PrimaryGeneratedColumn({ name: 'trackId' })
    id: number;

    @Column({ length: 200 })
    name: string;

    @ManyToOne(() => Album, (album) => album.tracks)
    album: Album;
}