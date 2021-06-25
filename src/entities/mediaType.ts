import { Field, ID, ObjectType } from 'type-graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Track } from './track';

@Entity({ 'name': 'media_types' })
@ObjectType()
export class MediaType {
    @PrimaryGeneratedColumn({ 'name': 'mediaTypeId' })
    @Field(type => ID)
    public id: number;

    @Column({ 'length': 120 })
    @Field()
    public name: string;

    @OneToMany(() => Track, track => track.mediaType)
    public tracks: Track[];
}