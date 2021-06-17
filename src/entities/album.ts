import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Artist } from './artist';

@Entity({ name: 'albums' })
export class Album {
    @PrimaryGeneratedColumn({ name: 'albumId' })
    id: number;

    @Column({ length: 160 })
    title: string;

    @ManyToOne(() => Artist, (artist) => artist.albums)
    artist: Artist;
}