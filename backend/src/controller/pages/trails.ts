import { Request, Response } from 'express';

// Sends welcome message to client
const get = (req: Request, res: Response) => {
    res.send('Welcome to the Trails page!'); 
};

export default {
    get
};