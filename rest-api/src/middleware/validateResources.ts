import {Request,Response, NextFunction} from 'express';
import { AnyZodObject } from 'zod';

const validateResources = (schema: AnyZodObject) => async(req: Request,res: Response,next: NextFunction) =>{
    try {
        await schema.parseAsync({
            body: req.body,
            params: req.params,
            query: req.query,
        });
        return next();
    } catch (error) {
        return res.status(400).json(error)
    }
}

export default validateResources;