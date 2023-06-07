import express from 'express';
import { createSessionH } from '../controller/auth.controller';
import validateResources from '../middleware/validateResources';
import { createSessionSchema } from '../schema/auth.schema';

const router = express.Router();

router.post('/session', validateResources(createSessionSchema),createSessionH);

export default router;