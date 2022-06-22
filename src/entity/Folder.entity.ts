import {
    Column,
    Entity,
    OneToMany,
    PrimaryGeneratedColumn,
    Tree,
    TreeChildren,
    TreeParent
} from 'typeorm';
import { File } from './File.entity';

@Entity()
@Tree('materialized-path')
export class Folder {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @TreeChildren()
    subfolders: Folder[];

    @TreeParent({ onDelete: 'CASCADE' })
    parent: Folder;

    @OneToMany(() => File, (file) => file.folder, { cascade: true })
    files: File[];
}
