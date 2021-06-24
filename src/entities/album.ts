import { Field, ID, ObjectType } from 'type-graphql';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Artist } from './artist';
import { Track } from './track';

@Entity({ name: 'albums' })
@ObjectType()
export class Album {
    @PrimaryGeneratedColumn({ name: 'albumId' })
    @Field(type => ID)
    id: number;

    @Column({ length: 160 })
    @Field()
    title: string;

    @Column()
    @Field()
    artistId: number;

    @ManyToOne(() => Artist, artist => artist.albums)
    @Field(type => Artist)
    artist: Artist;

    @OneToMany(() => Track, track => track.album)
    @Field(type => [ Track ])
    tracks: Track[];
}