import { Router, Request, Response } from 'express';
const route = Router();

export default (app: Router) => {
    app.use('/users', route);

    route.get('/me', (req: Request, res: Response) => {
        return res.json({ user: 'You made it' }).status(200);
    });
};
