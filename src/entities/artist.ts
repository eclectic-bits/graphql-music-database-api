import { Field, ID, ObjectType } from 'type-graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Album } from '../entities';

@Entity({ name: 'artists' })
@ObjectType()
export class Artist {
    @PrimaryGeneratedColumn({ name: 'artistId' })
    @Field(type => ID)
    public id: number;

    @Column({ length: 120 })
    @Field()
    public name: string;

    @OneToMany(() => Album, album => album.artist)
    @Field(type => [ Album ])
    public albums: Album[];
}