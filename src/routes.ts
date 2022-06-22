import { FileController, FolderController } from './controller';

export const Routes = [
    {
        method: 'post',
        route: '/folder',
        controller: FolderController,
        action: 'save'
    },
    {
        method: 'delete',
        route: '/folder/:id',
        controller: FolderController,
        action: 'remove'
    },
    {
        method: 'get',
        route: '/file',
        controller: FileController,
        action: 'search'
    },
    {
        method: 'post',
        route: '/file',
        controller: FileController,
        action: 'save'
    },
    {
        method: 'delete',
        route: '/file/:id',
        controller: FileController,
        action: 'remove'
    }
];
