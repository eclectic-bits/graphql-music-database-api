import { Connection, getConnection } from 'typeorm';

export abstract class Repository {
    protected connection: Connection;

    constructor() {
        this.connection = getConnection();
    }
}