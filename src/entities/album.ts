import { Field, ID, ObjectType } from 'type-graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'albums' })
@ObjectType()
export class Album {
    @PrimaryGeneratedColumn({ name: 'albumId' })
    @Field(type => ID)
    id: number;

    @Column({ length: 160 })
    @Field()
    title: string;
}