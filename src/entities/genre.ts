import { Field, ID, ObjectType } from 'type-graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Track } from './track';

@Entity({ name: 'genres' })
@ObjectType()
export class Genre {
    @PrimaryGeneratedColumn({ name: 'genreId' })
    @Field(type => ID)
    id: number;

    @Column({ length: 120 })
    @Field()
    name: string;

    @OneToMany(() => Track, track => track.genre)
    tracks: Track[];
}