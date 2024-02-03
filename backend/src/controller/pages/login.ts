import { Request, Response } from 'express';

const get = (req: Request, res: Response) => {
    res.send('Welcome to the Login page!'); 
};

export default {
    get
};