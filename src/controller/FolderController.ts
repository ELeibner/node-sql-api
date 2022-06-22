import { Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { Folder } from '../entity';

export class FolderController {
    private folderTreeRepository = AppDataSource.getTreeRepository(Folder);

    async save(req: Request, _res: Response) {
        return this.folderTreeRepository.save(req.body);
    }

    async remove(req: Request, _res: Response) {
        const folderToRemove = await this.folderTreeRepository.findOneBy({
            id: req.params.id
        });
        await this.folderTreeRepository.remove(folderToRemove);
        return req.params;
    }
}
