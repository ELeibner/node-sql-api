import { Request, Response } from 'express';
import { Like } from 'typeorm';
import { AppDataSource } from '../data-source';
import { File } from '../entity';

export class FileController {
    private fileRepository = AppDataSource.getRepository(File);
    private defaultSearchLimit = 10;

    async search(req: Request, res: Response) {
        try {
            const result = await this.fileRepository.find({
                where: {
                    name: Like(`%${req.query.searchQuery}%`),
                    folder: {
                        id: Number(req.query.folderId)
                    }
                },
                ...(req.query.limit && {
                    take: Number(req.query.limit) ?? this.defaultSearchLimit
                })
            });
            return result;
        } catch {
            res.sendStatus(500);
        }
    }

    async save(req: Request, res: Response) {
        try {
            return this.fileRepository.save(req.body);
        } catch {
            res.sendStatus(500);
        }
    }

    async remove(req: Request, res: Response) {
        try {
            const fileToRemove = await this.fileRepository.findOneBy({
                id: Number(req.params.id)
            });
            await this.fileRepository.remove(fileToRemove);
            res.sendStatus(204);
        } catch (error) {
            res.sendStatus(500);
        }
    }
}
