import { Field, ID, ObjectType } from 'type-graphql';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Artist } from './artist';
import { Track } from './track';

@Entity({ 'name': 'albums' })
@ObjectType()
export class Album {
    @PrimaryGeneratedColumn({ 'name': 'albumId' })
    @Field(type => ID)
    public id: number;

    @Column({ 'length': 160 })
    @Field()
    public title: string;

    @Column()
    @Field()
    public artistId: number;

    @ManyToOne(() => Artist, artist => artist.albums)
    @Field(type => Artist)
    public artist: Artist;

    @OneToMany(() => Track, track => track.album)
    @Field(type => [ Track ])
    public tracks: Track[];
}