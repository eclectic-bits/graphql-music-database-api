import { Field, ID, ObjectType } from 'type-graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Track } from './track';

@Entity({ name: 'genres' })
@ObjectType()
export class Genre {
    @PrimaryGeneratedColumn({ name: 'genreId' })
    @Field(type => ID)
    public id: number;

    @Column({ length: 120 })
    @Field()
    public name: string;

    @OneToMany(() => Track, track => track.genre)
    public tracks: Track[];
}