import express from 'express';
import { getHomes } from '../controllers/homeController.js';

const router = express.Router();

router.route('/').get(getHomes);

export default router;
