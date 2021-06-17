import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Album } from './album';

@Entity({ name: 'artists' })
export class Artist {
    @PrimaryGeneratedColumn({ name: 'artistId' })
    id: number;

    @Column({ length: 120 })
    name: string;

    @OneToMany(() => Album, (album) => album.artist)
    albums: Album[];
}