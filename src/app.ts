import * as bodyParser from 'body-parser';
import * as express from 'express';
import { Request, Response } from 'express';
import { AppDataSource } from './data-source';
import { Routes } from './routes';

AppDataSource.initialize()
    .then(async () => {
        // create express app
        const app = express();
        app.use(bodyParser.json());

        // register express routes from defined application routes
        Routes.forEach((route) => {
            (app as any)[route.method](
                route.route,
                (req: Request, res: Response) => {
                    const result = new (route.controller as any)()[
                        route.action
                    ](req, res);
                    if (result instanceof Promise) {
                        result.then((result) =>
                            result !== null && result !== undefined
                                ? res.send(result)
                                : undefined
                        );
                    } else if (result !== null && result !== undefined) {
                        res.json(result);
                    }
                }
            );
        });

        // start express server
        app.listen(3001);

        console.log('Server started on port 3001. Open http://localhost:3001/');
    })
    .catch((error) => console.log(error));
