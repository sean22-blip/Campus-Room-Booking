import { viewProfile } from '../controller/staffController';
import { Router } from 'express';
export const staffRouter = Router();
staffRouter.get('/:id', viewProfile);
