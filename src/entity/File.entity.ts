import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Folder } from './Folder.entity';

@Entity()
export class File {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(() => Folder, (folder) => folder.files, { onDelete: 'CASCADE' })
    folder: Folder;
}
