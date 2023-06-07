import express from 'express';
import  {createUserH, forgotPasswordH, getCurrentUser, resetPasswordH, verifyUserH}  from '../controller/user.controller';
import authMiddlware from '../middleware/authMiddleware';
import validateResources from '../middleware/validateResources';
import { createUserSchema, verifyUserSchema, forgotPasswordSchema, resetPasswordSchema } from '../schema/user.schema';

const router = express.Router();

router.post('/',validateResources(createUserSchema),createUserH);
router.post('/verify/:id/:verificationCode',validateResources(verifyUserSchema), verifyUserH);
router.post('/forgotPassword', validateResources(forgotPasswordSchema), forgotPasswordH);
router.post('/resetpassword/:id/:passwordResetCode', validateResources(resetPasswordSchema), resetPasswordH)
router.get('/me', authMiddlware,getCurrentUser);

export default router;