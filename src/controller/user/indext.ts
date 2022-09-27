import express, { Request, Response } from 'express';

export class userController {

    static register(req: Request, res: Response): void {
        res.status(200).send('a');
    }

}
