import { Application } from 'https://deno.land/x/oak/mod.ts';

import router from './routes.ts';

const APP_HOST = '127.0.0.1';
const APP_PORT = '8000';

const app = new Application();

app.use(router.routes());

console.log(`Listening on port ${APP_PORT}`);

app.listen(`${APP_HOST}:${APP_PORT}`);
