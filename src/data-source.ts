import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { File, Folder } from './entity';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'root',
    password: 'admin',
    database: 'database',
    entities: [File, Folder],
    synchronize: true,
    logging: false
});
