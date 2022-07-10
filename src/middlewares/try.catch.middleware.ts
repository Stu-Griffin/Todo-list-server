import { Response, Request } from 'express';

export default async function tryCatchMiddlewareAPI(req: Request, res: Response, calback: any) {
    try {
        const response = await calback;
        res.status(200);
        res.send(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: `by the method ${req.method}, on path ${req.path} was error` });
    }
}

export async function tryCatchMiddlewareNotAPI(calback: any, successMsg: string) {
    try {
        const response = await calback;
        console.log(successMsg);
    } catch (err) {
        console.log(err);
    }
}