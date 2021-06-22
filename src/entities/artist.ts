import { Field, ID, ObjectType } from 'type-graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Album } from './album';

@Entity({ name: 'artists' })
@ObjectType()
export class Artist {
    @PrimaryGeneratedColumn({ name: 'artistId' })
    @Field(type => ID)
    id: number;

    @Column({ length: 120 })
    name: string;

    @OneToMany(() => Album, album => album.artist)
    albums: Album[];
}