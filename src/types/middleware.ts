import { Request, Response } from 'express';

/**
 * Middleware type for use with expressJS middleware
 */
export declare type Middleware = (request: Request, response: Response)=> Promise<void>;