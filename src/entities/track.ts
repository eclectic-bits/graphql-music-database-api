import { Field, ID, ObjectType } from 'type-graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Album } from './album';

@Entity({ name: 'tracks' })
@ObjectType()
export class Track {
    @PrimaryGeneratedColumn({ name: 'trackId' })
    @Field(type => ID)
    id: number;

    @Column({ length: 200 })
    @Field()
    name: string;

    @Column()
    @Field()
    albumId: number;

    @ManyToOne(() => Album, album => album.tracks)
    @Field(type => Album)
    album: Album;

    @Column()
    @Field()
    mediaTypeId: number;

    @Column()
    @Field()
    genreId: number;

    @Column({ length: 220 })
    @Field()
    composer: string;

    @Column()
    @Field()
    milliseconds: number;

    @Column()
    @Field()
    bytes: number;

    @Column()
    @Field()
    unitPrice: number;
}