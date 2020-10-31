import { Router } from 'https://deno.land/x/oak/mod.ts';

import userController from './controllers/userController.ts';

const router = new Router();

router
  .get('/users', userController.list)
  .post('/users', userController.create)
  .patch('/users/:username', userController.update);

export default router;
