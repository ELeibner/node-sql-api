import { Request, Response } from 'express';
import { Like } from 'typeorm';
import { AppDataSource } from '../data-source';
import { File } from '../entity';

export class FileController {
    private fileRepository = AppDataSource.getRepository(File);
    private defaultSearchLimit = 10;

    async search(req: Request, _res: Response) {
        const result = await this.fileRepository.find({
            where: {
                name: Like(`%${req.query.search_query}%`),
                folder: {
                    id: req.query.folderId
                }
            },
            take: req.query.limit ?? this.defaultSearchLimit
        });
        return result;
    }

    async save(req: Request, _res: Response) {
        return this.fileRepository.save(req.body);
    }

    async remove(req: Request, _res: Response) {
        const fileToRemove = await this.fileRepository.findOneBy({
            id: req.params.id
        });
        await this.fileRepository.remove(fileToRemove);
        return req.params;
    }
}
