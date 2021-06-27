import { Field, ID, ObjectType } from 'type-graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ 'name': 'playlists' })
@ObjectType()
export class Playlist {
    @PrimaryGeneratedColumn({ 'name': 'playlistId' })
    @Field(type => ID)
    public id: number;

    @Column({ 'length': 120 })
    @Field()
    public name: string;
}