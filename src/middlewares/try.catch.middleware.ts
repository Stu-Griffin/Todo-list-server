import { Response, Request } from 'express';

export default async function tryCatchMiddleware(req: Request, res: Response, calback: any) {
    try {
        const response = await calback;
        res.status(200);
        res.send(response);
    } catch (err) {
        res.status(500).json({ error: `by the method ${req.method}, on path ${req.path} was error` });
    }
}