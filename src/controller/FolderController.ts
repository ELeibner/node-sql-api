import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { Folder } from '../entity';

export class FolderController {
    private folderTreeRepository = AppDataSource.getTreeRepository(Folder);

    async save(req: Request, res: Response) {
        try {
            return this.folderTreeRepository.save(req.body);
        } catch {
            res.sendStatus(500);
        }
    }

    async remove(req: Request, res: Response) {
        try {
            const folderToRemove = await this.folderTreeRepository.findOneBy({
                id: Number(req.params.id)
            });
            await this.folderTreeRepository.remove(folderToRemove);
            res.sendStatus(204);
        } catch (error) {
            res.sendStatus(500);
        }
    }
}
