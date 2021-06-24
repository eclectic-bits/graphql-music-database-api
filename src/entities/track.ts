import { Field, ID, ObjectType } from 'type-graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Album } from './album';
import { Genre } from './genre';

@Entity({ name: 'tracks' })
@ObjectType()
export class Track {
    @PrimaryGeneratedColumn({ name: 'trackId' })
    @Field(type => ID)
    public id: number;

    @Column({ length: 200 })
    @Field()
    public name: string;

    @Column()
    @Field()
    public albumId: number;

    @ManyToOne(() => Album, album => album.tracks)
    @Field(type => Album)
    public album: Album;

    @Column()
    @Field()
    public mediaTypeId: number;

    @Column()
    @Field()
    public genreId: number;

    @ManyToOne(() => Genre, genre => genre.tracks)
    @Field(type => Genre)
    public genre: Genre;

    @Column({ length: 220 })
    @Field()
    public composer: string;

    @Column()
    @Field()
    public milliseconds: number;

    @Column()
    @Field()
    public bytes: number;

    @Column()
    @Field()
    public unitPrice: number;
}