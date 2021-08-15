import { Router } from 'express';

const routes = new Router();

import SendMessageController from './app/controllers/SendMessageController';

routes.get('/', (req, res) => {
    res.json({messege:'Hello World'});
});

routes.post('/send', SendMessageController.store);
routes.post('/post', SendMessageController.post);


export default routes;