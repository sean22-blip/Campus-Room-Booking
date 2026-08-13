import { viewProfile } from '../controllers/staffController';
import { Router } from 'express';
export const staffRouter = Router();
staffRouter.get('/:id', viewProfile);
