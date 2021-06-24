import { Field, ID, ObjectType } from 'type-graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Artist } from './artist';

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
}