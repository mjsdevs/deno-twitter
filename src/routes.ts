import { Router } from 'https://deno.land/x/oak/mod.ts';

import userController from './controllers/userController.ts';

const router = new Router();

router
  .get('/users', userController.list)
  .post('/users', userController.create)
  .patch('/users/:username', userController.update)
  .delete('/users/:username', userController.delete)
  .get('/users/:username', userController.detail);

export default router;
