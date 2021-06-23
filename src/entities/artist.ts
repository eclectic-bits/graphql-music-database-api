import { Field, ID, ObjectType } from 'type-graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

import { Album } from '../entities';

@Entity({ name: 'artists' })
@ObjectType()
export class Artist {
    @PrimaryGeneratedColumn({ name: 'artistId' })
    @Field(type => ID)
    id: number;

    @Column({ length: 120 })
    @Field()
    name: string;

    @Field(type => [ Album ])
    albums: Album[];
}