import { Request, Response } from 'express';

export declare type Middleware = (request: Request, response: Response)=> Promise<void>;